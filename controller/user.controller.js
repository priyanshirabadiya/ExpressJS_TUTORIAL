const User = require('../model/user.model');
const userService = require('../services/user.service');
const Messages = require('../helpers/messages');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getallUsers = async (req, res) => {
    try {
        let users = await userService.findUsers({ isDelete: false });
        res.send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send({ Messages: Messages.INTERNAL_SERVER_ERROR });
    }
}

exports.registerUser = async (req, res) => {
    try {
        let user = await userService.findOneUser({ email: req.body.email, isDelete: false });
        if (user) {
            return res.send({ message: Messages.ALREDY_EXIST_USER });
        }
        let hashpass = await bcrypt.hash(req.body.password, 10);
        user = await userService.addNewUser({ ...req.body, password: hashpass });
        res.send({ user, message: Messages.USER_REGISTER });
    } catch (err) {
        console.log(err);
        res.status(500).send({ Messages: Messages.INTERNAL_SERVER_ERROR });
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await userService.findOneUser({ email: req.body.email, isDelete: false });
        if (!user) {
            return res.send({ message: Messages.NOT_FOUND });
        }
        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            return res.send({ message: Messages.INCORRECT_PASS });
        }
        // Creating token for reach home page.
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);
        res.json({ message: Messages.USER_LOGIN, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ Messages: Messages.INTERNAL_SERVER_ERROR });
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(
            user._id,
            { $set: req.body },
            { new: true }
        )
        if (!user) {
            return res.send({ message: Messages.NOT_FOUND });
        }
        res.json({ message: Messages.UPDATED_USER, user });

    } catch (err) {
        console.log(err);
        res.status(500).send({ Messages: Messages.INTERNAL_SERVER_ERROR });
    }
}

