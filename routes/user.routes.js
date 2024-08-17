
const express = require('express');
const userRoutes = express.Router();

const {
    addnewUser,
    getAllusers,
    getSingleuser,
    updateUser,
    deleteUser
} = require('../controller/user.controller')

userRoutes.post("/add", addnewUser);

userRoutes.get('/all',getAllusers);

userRoutes.get('/single',getSingleuser);

userRoutes.put('/update' , updateUser )

userRoutes.delete('/delete' , deleteUser )

module.exports = userRoutes;


