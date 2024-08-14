
const express = require('express');
const userRoutes = express.Router();

const {
    addNewuser,
} = require('../controller/user.controller')

userRoutes.get("/add", addNewuser);

module.exports = userRoutes;


