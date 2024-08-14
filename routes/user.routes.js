
const express = require('express');
const userRoutes = express.Router();

const {
    addNewuser,
    getAllusers,
    getSingleuser
} = require('../controller/user.controller')

userRoutes.get("/add", addNewuser);

userRoutes.get('/all',getAllusers);

userRoutes.get('/single',getSingleuser);

module.exports = userRoutes;


