// -------- Lecture-5  CRUD OPERATION in which create and read operation

const express = require('express')
const app = express();
const users = require('./dummy.json');
const morgan = require('morgan');

app.use(morgan("short"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// CRUD operation
// create user

// app.get("/", (req,res)=> {
//     // res.send("Welcome to express");
//     // res.send(users);
//     users.push(req.body);
//     // res.json({message:"Successfully added..."});
//     res.send(users);
// })

// READ - get all users

// app.get("/user",(req,res)=> {
//     res.json(users);
// })

// Get only one user

app.get("/user/:id" , (req,res) => {
    let id = +req.params.id;
    let item = users.find((user) => user.id === id)
    res.json(item);
})

app.listen(1000, () => {
    console.log(" Server at  http://localhost:1000");
})

