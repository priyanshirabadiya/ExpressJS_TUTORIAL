// const products = require("../product.json"); // static data 
const User = require('../model/user.model'); // database

exports.addNewuser = async (req, res) => {
    try {
        const adduser = await User.create(req.body);
        res.status(200).json({ adduser, message: "User added successfully..." });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "message": "Sorry can't set data." });
    }
}


// ----------------------- How we handle it in static data -----------------------

// exports.addNewuser = (req,res) => {
//     users.push(req.body);
//     res.send(users);
// }

// exports.getAlluser = (req, res) => {
//     res.send(User);
// }

// exports.getSingleuser = (req,res) => {
//     let id = +req.params.id;
//     let user = users.find((item) => item.id === id);
//     res.json(user);
// }

// exports.replaceUser = (req,res) => {
//     let id = +req.params.id;
//     let productIndex = users.findIndex((item) => item.id === id);
//     users.splice(productIndex,1,req.body);
//     res.json({message:"Replace data successfully..."});
// }

// exports.updateUser = (req,res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id);
//     let mainuser = users[userIndex];
//     users.splice(userIndex,1,{...mainuser,...req.body});
//     res.json({message:"Updata data successfully..."});
// }

// exports.deleteUser = (req,res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id);
//     users.splice(userIndex , 1);
//     res.json({message:"User deletes successfully..."});
// }

