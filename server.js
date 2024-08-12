// ---------------------------- CRUD OPERATION ON PRODUCT DUMMY DATA BY USING ROUTER ----------------------------

const express = require("express");
const server = express();
const morgan = require('morgan');
const userRoutes = require("./routes/user.routes");

// Middleware
server.use(morgan('short'));
server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.get("/" , (req,res) => {
    res.send("<h1>Welcome to server</h1>")
} )

server.use("/product" , userRoutes);

server.listen(1122,() => {
    console.log('Start at  http://localhost:1122 ');
})
