
const express = require('express');
const userRoutes = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
    deleteUser,
    getAll
} = require('../controller/user.controller');

const {verifyToken} = require('../helpers/verifyToken')

userRoutes.get("/all" , getAll );

userRoutes.post("/register" , registerUser );

userRoutes.get("/login" , loginUser );

userRoutes.get("/me" , verifyToken , getProfile)

module.exports = userRoutes;


