const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// exports.addUser = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email, isDelete: false });
//         if (user) {
//             res.send("User already exist...");
//         }
//         user = await User.create(req.body);
//         res.send({ user, message: "User added succesfully..." });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("internal server error...");
//     }
// }

exports.getallUsers = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        res.send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error...");
    }
}

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            res.send("User already exist...");
        }
        let hashpass = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body, password: hashpass });
        res.send({ user, message: "User added succesfully..." });
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error...");
    }
}


exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            res.send({ message: "User not found..." });
        }
        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            res.send("Email or password is incorrect... ");
        }
        // Creating token for reach home page.
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);
        res.json({ message: "User login success...", token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error ..." });
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
            return res.send("User not found...");
        }
        res.json({ message: "User updated successfully", user });

    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error...");
    }
}









