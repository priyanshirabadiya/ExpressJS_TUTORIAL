// ---------------------------- CONNECTING WITH DATABASE ----------------------------

const express = require("express");
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user.routes");

mongoose.connect("mongodb://127.0.0.1:27017/node5to7")
        .then(()=>console.log('Database connection established success...'))
        .catch((err)=>console.log(err));

// Middleware
server.use(morgan('short'));
server.use(express.json());
server.use(express.urlencoded({extended:false}));
    
server.get("/" , (req,res) => {
    res.send("<h1>Welcome to server.</h1>");
})

server.use("/api/user" , userRoutes);

server.listen(1111,() => {
    console.log('Start at  http://localhost:1111 ');
})
