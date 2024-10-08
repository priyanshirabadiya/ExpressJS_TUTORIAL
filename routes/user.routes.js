const express = require('express');
const routes = express.Router();

const { verifyToken } = require('../helpers/verifyToken');
const {
    addUser,
    getallUsers,
    updateUser,
    registerUser,
    loginUser,
} = require('../controller/user.controller')

const {
    addProduct,
    getAllproducts
} = require('../controller/product.controller');

const {
    addToCart,
    getAllCarts,
    updateCart,
    deleteCart
} = require('../controller/carts.controller');

const { 
    addNewOrder, 
    cancelOrder
} = require('../controller/order.controller');


routes.get('/all', getallUsers);

routes.put('/update', verifyToken, updateUser);

routes.post('/register', registerUser);

routes.get('/login', loginUser);

// ------------------- product ----------------

routes.post('/addproduct', addProduct); 

routes.get('/allproduct', getAllproducts);

// -------------------- cart ------------------

routes.post('/addcart', verifyToken, addToCart);

routes.put('/updatecart', verifyToken, updateCart);

routes.get('/allcart', verifyToken, getAllCarts);

routes.delete('/deletecart', verifyToken, deleteCart);

// -------------------- order -------------------

routes.get('/addorder' , verifyToken , addNewOrder );

routes.delete('/cancelorder' , verifyToken , cancelOrder );

module.exports = routes;

