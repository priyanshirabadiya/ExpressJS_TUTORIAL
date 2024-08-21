const User = require('../model/user.model'); // database
// Adding one another functionality isDelete so it can check condition that user which is not deleted.
exports.addnewUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
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

exports.getAllusers = async (req, res) => {
    try {
        // console.log({ isDelete: false });
        let users = await User.find({ isDelete: false });
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
    }
}

// Soft delete in this data will be deleted in postman or temporary so user can see but it will be not deleted in main database. So if any user is deleted then it will show isDelete true else if it will show isDelete false
exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById({ _id: req.query.userId, isDelete: false });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user = await User.findByIdAndUpdate(user._id, { isDelete: true }, { new: true });
        res.status(200).json({ user, message: "User delete success" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error..." });
    }
}






