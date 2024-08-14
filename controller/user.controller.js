const User = require('../model/user.model'); // database

exports.addNewuser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if(user){
            return res.status(400).json({message:"User already exist..."});
        }
        const adduser = await User.create(req.body);
        res.status(200).json({ adduser, message: "User added successfully..." });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Sorry can't set data." });
    }
}
