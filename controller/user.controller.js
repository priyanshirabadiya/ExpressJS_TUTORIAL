// ---------------------------- jsonwebtoken ----------------------------
const jwt = require('jsonwebtoken');
const User = require('../model/user.model'); // database 
const bcrypt = require('bcrypt');
const { use } = require('../routes/user.routes');


exports.getAll = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        res.send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "internal server" });
    }
}

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.query.email, isDelete: false });
        console.log(user);
        if (user) {
            return res.status(401).send({ user, message: "User already exist" });
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body, password: hashPassword });

        res.status(201).json({ user, message: "User added successfully..." });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error..." });
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (!user) {
            res.send({ message: "User not found..." });
        }

        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            res.send("Email or password is incorrect exist... ");
        }
        // Creating token for reach home page.
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECREAT);
        res.json({ message: "User login success...", token });
    } catch (error) {
        console.log(err);
        res.status(500).send({ message: "Internal server error ..." });
    }
}

exports.getProfile = async (req, res) => {
    try {
        res.send("Welcome to user profile");
    } catch (err) {
        console.log(err);
    }
}

