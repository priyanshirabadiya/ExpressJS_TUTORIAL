// const express = require('express');
// const userRoutes = express.Router();
// const products = require("../product.json");

// userRoutes.get('/' , (req,res) => {
//     res.send(products);
// });

// userRoutes.get("/add" , (req,res) => {
//     // res.send("<h1>Hello this is home Page.</h1>");
//     products.push(req.body);
//     res.send(products);
//     // console.log(products);
// })

// userRoutes.post("/:id" , (req,res) => {
//     let id = +req.params.id;
//     let product = products.find((item) => item.id === id);
//     res.json(product);
// })

// userRoutes.put("/:id" , (req,res)=>{
//     let id = +req.params.id;
//     let productIndex = products.findIndex((item) => item.id === id);
//     products.splice(productIndex,1,req.body);
//     res.json({message:"Replace data success.."});
// })

// userRoutes.patch("/:id" , (req,res) => {
//     let id = +req.params.id;
//     let productIndex = products.findIndex((item) => item.id  === id);
//     let mainproduct = products[productIndex];
//     products.splice(productIndex , 1 , {...mainproduct,...req.body});
//     res.json({message:"update data success.."});
// })

// module.exports = userRoutes;

// ------------------------------------- By creating controllers ---------------------------------------------

const express = require('express');
const userRoutes = express.Router();

const {
    addNewproduct,
    getAllproducts,
    getSingleproduct,
    replaceProduct,
    updateProduct
} = require('../controller/user.controller')

userRoutes.get("/add", addNewproduct);

userRoutes.get("/", getAllproducts);

userRoutes.post("/:id", getSingleproduct);

userRoutes.put("/:id", replaceProduct);

userRoutes.patch("/:id", updateProduct);

module.exports = userRoutes;





