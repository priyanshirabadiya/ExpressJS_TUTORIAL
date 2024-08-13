const express = require('express');
const userRoutes = express.Router();

const {
    addNewuser,
    getAlluser,
    getSingleuser,
    replaceUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller')

userRoutes.get("/add", addNewuser);

userRoutes.get("/", getAlluser);

userRoutes.post("/:id", getSingleuser);

userRoutes.put("/:id", replaceUser);

userRoutes.patch("/:id", updateUser);

userRoutes.delete("/:id" , deleteUser )

module.exports = userRoutes;

