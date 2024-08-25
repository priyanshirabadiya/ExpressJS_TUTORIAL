const express = require('express');
const multer = require('multer');
const userRoutes = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
    deleteUser,
    getAll,
    updateProfile
} = require('../controller/user.controller');

const { verifyToken } = require('../helpers/verifyToken');
const { upload } = require('../helpers/imageUpload');
userRoutes.get("/all", getAll);

userRoutes.post("/register" , upload.single('imageUpload') , registerUser);

userRoutes.get("/login", loginUser);
userRoutes.delete("/delete", deleteUser);
userRoutes.get("/me", verifyToken, getProfile);
userRoutes.put("/update", verifyToken, updateProfile);

module.exports = userRoutes;


