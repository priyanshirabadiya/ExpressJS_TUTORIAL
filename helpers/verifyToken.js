const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res , next) => {
    try {
        let authorization = req.headers['authorization'];
        // console.log(authorization);
        if(!authorization){
            return res.send("Not autorization");
        }
        let token = authorization.split(" ")[1];
        console.log(token);
        let { userId } = await jwt.verify(token, process.env.JWT_SECREAT);
        let user = await User.findOne({ _id: userId, isDelete: false });
        if (!user) {
            res.send("User not found...");
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.send("Internal server error...");
    }
}

