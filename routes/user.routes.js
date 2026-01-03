const express = require('express');
const userRoutes = express.Router();

const {
    specialUser,
    getAll,    
} = require('../controller/user.controller');

userRoutes.get("/all" , getAll );

userRoutes.get("/special" , specialUser )

module.exports = userRoutes;
