// const products = require("../product.json");
const users = require('../dummy.json');

exports.addNewuser = (req,res) => {
    users.push(req.body);
    res.send(users);
}

exports.getAlluser = (req,res) => {
    res.send(users);
}

exports.getSingleuser = (req,res) => {
    let id = +req.params.id;
    let user = users.find((item) => item.id === id);
    res.json(user);
}

exports.replaceUser = (req,res) => {
    let id = +req.params.id;
    let productIndex = users.findIndex((item) => item.id === id);
    users.splice(productIndex,1,req.body);
    res.json({message:"Replace data successfully..."});
}

exports.updateUser = (req,res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let mainuser = users[userIndex];
    users.splice(userIndex,1,{...mainuser,...req.body});
    res.json({message:"Updata data successfully..."});
}

exports.deleteUser = (req,res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    users.splice(userIndex , 1);
    res.json({message:"User deletes successfully..."});
}

