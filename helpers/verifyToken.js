const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];
        if (!authorization) {
            return res.json({ message: "not authorized person" });
        }
        let token = authorization.split(" ")[1];
        let { userId } = await jwt.verify(token, process.env.JWT_SECRETE); 
        let user = await User.findOne({ _id: userId, isDelete: false });
        if (!user) {
            return res.json({ message: "user not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}


