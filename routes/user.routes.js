
const express = require('express');
const userRoutes = express.Router();

const {
    // addnewUser,
    // getAllusers,
    // getSingleuser,
    // updateUser,
    // deleteUser,
    registerUser,
    loginUser
} = require('../controller/user.controller');

// userRoutes.post("/add", addnewUser);

// userRoutes.get('/all',getAllusers);

// userRoutes.get('/single',getSingleuser);

// userRoutes.put('/update' , updateUser )

// userRoutes.delete('/delete' , deleteUser )

userRoutes.post("/register" , registerUser );
userRoutes.post("/login" , loginUser );



module.exports = userRoutes;


