const express = require('express');
const userRoutes = express.Router();

const {
    addNewuser,
    getAlluser
} = require('../controller/user.controller')

userRoutes.get("/add", addNewuser);
// userRoutes.get("/", getAlluser);

module.exports = userRoutes;


