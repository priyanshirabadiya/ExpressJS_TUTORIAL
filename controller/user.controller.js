const User = require('../model/user.model'); // database
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.query.email, isDelete: false });
        if (user) {
            res.send({ message: "User already exists..." });
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashPassword);
        user = await User.create({ ...req.body, password: hashPassword });
        res.status(500).send({ user, message: "User added success.." });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error..." });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            res.send({ message: "User not found..." });
        }
        let comparepassword = await bcrypt.compare(req.body.password, user.password)
        console.log(comparepassword);
        if(!comparepassword){
            res.send("Email or password does not match...");
        }
        res.status(200).send({ user, message: "User login success..." });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error ..." })
    }
}



