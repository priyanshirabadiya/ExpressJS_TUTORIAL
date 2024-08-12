// ---------------------------- CRUD OPERATION ON PRODUCT DUMMY DATA ----------------------------

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
















