const User = require('../model/user.model'); // database


exports.getAllusers = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
    }
}

exports.addnewUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(402).send({ message: "User already exist..." });
        }
        let addedUser = await User.create(req.body);
        res.status(200).send({ addedUser, message: "User addded successfully..." });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: " Internal server error..." });
    }
}



exports.getSingleuser = async (req, res) => {
    try {
        const user = await User.findOne({ firstName: req.query.firstName }); // give perticular name in object for find string data
        // const user = await User.findOne({ _id: req.query._userId }); // _userId : give this name as per key name  
        // const user = await User.findById(req.query.userId);  // only findById is allow direct use req.query.userId 

        if (!user) {
            return res.status(404).send("User can't found...");
        }
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.send("internal server error...");
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.query._id);
        if (!user) {
            return res.status(404).json({ message: "User not found..." });
        }
        // user = await User.updateOne({ _id : req.query._id } , req.body , {new:true});
        user = await User.findByIdAndUpdate({ _id: user._id }, { $set: req.body }, { new: true });
        res.send({user, message:"Date update Successfully..."});
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error...");
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.query.userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        // let user = await User.deleteMany({ email: "pt@gmail.in" });
        // let user = await User.deleteOne({ email: "pt@gmail.in" });
        // user = await User.findOneAndDelete({_id:user._id});
        user = await User.findOneAndDelete({firstName:"priyanshi"});
        res.status(200).json({ user, message: "User delete success" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error..." });
    }
}



