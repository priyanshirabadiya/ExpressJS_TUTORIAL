const jwt = require('jsonwebtoken');
const User = require('../model/user.model'); // database 
const bcrypt = require('bcrypt');


exports.specialUser = async (req, res) => {
    try {
        // let user = {
        //     firstName: "sachin",
        //     lastName: "Tendulker",
        //     age: 40,
        //     email: "sachin@gmail.com",
        //     mobileNo: "123654789",
        //     hobbies: ['sport', 'play', 'read']
        // }

        let user = await User.findOne({ email: req.body.email, isDelete: false });
        console.log(user);

        if (!user) {
            return res.send('notfound.ejs');
        }
        res.render('user.ejs', { user });
    } catch (err) {
        console.log(err);
        res.send("Internal server error...");
    }
}

exports.getAll = async (req, res) => {
    try {
        let user = await User.find({ isDelete: false })
        res.send({ user });
    } catch (err) {
        console.log(err);
        res.send("Internal server error...");
    }
}


// exports.specialUser = async (req, res) => {
//     try {
//         let user = await User.findOne({ firstName: "priynshi", isDelete: false });
//         if (!user) {
//             return res.render('notfound.ejs');
//         }
//         res.render('user.ejs', { user });
//     } catch (err) {
//         console.log(err);
//         res.send("Internal server error...");
//     }
// }


