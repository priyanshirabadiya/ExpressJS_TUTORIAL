// -------- Lecture-6 UDATE / DELETE crud operation in expressJS
// const users = require('./dummy.json');
// const express = require('express');
// const morgan = require('morgan');
// const server = express();

// server.use(morgan('dev'));
// server.use(express.json());
// server.use(express.urlencoded({extended:false}));

// server.get("/" , (req,res) => {
    // console.log('Welcom to expressJS');
    // res.end("This is welcome page")
    // res.send(users);
// });

// Create user / add user
// server.post("/user" , (req,res) => {
//     users.push(req.body);
//     // res.json({message:"User added successfully..."})
//     // res.json(users);
// })


// Read data
// get all user
// server.get("/" , (req,res) => {
//     res.json(users);
// });

// get single user

// server.get("/user/:id" , (req,res)=>{
//     let id = +req.params.id;
//     let user = users.find((user) => user.id === id);
//     res.json(user);
// })

// UPDATE DATA PUT method replace data

// server.put("/user/:id" , (req,res) =>{
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id)
//     users.splice(userIndex , 1 , req.body);
//     res.json({message:"Replace data successfully..."})
// })


// PATCH DATA 

// By using find method
// server.patch("/user/:id" , (req,res) => {
//     let id = +req.params.id;
//     let usermain = users.find((user) => user.id === id);
//     let userIndex = users.findIndex((user) => user.id === id);
//     users.splice(userIndex,1,{...usermain , ...req.body});
//     res.json({message:"Update data successfully..."});
// })

// By using findIndex method use this
// server.patch("/user/:id" , (req,res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id);
//     let usermain = users[userIndex];
//     users.splice(userIndex,1,{...usermain , ...req.body});
//     res.json({message:"Update data successfully..."});
// })



// server.delete("/user/:id" , (req,res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((user) => user.id === id);
//     users.splice(userIndex , 1);
//     res.json({message:"data deletes successfully..."})
// });

// server.listen(1122,() => {
//     console.log('Server http://localhost:1122');
// })




// ---------------------------- CREATE PRODUCT ----------------------------

const express = require("express");
const server = express();
const products = require("./product.json");
const morgan = require('morgan');

server.use(morgan('short'));
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.get("/" , (req,res) => {
    // res.send("<h1>Hello this is home Page.</h1>");
    products.push(req.body);
    res.send(products);
    // console.log(products);
})

server.post("/user/:id" , (req,res) => {
    let id = +req.params.id;
    let product = products.find((item) => item.id === id);
    res.json(product);
})

server.put("/user/:id" , (req,res)=>{
    let id = +req.params.id;
    let productIndex = products.findIndex((item) => item.id === id);
    products.splice(productIndex,1,req.body);
    res.json({message:"Replace data success.."});
})


server.patch("/user/:id" , (req,res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((item) => item.id  === id);
    let mainproduct = products[productIndex];
    products.splice(productIndex , 1 , {...mainproduct,...req.body});
    res.json({message:"update data success.."});
})

server.listen(1122,() => {
    console.log('Start at  http://localhost:1122 ');
})
















