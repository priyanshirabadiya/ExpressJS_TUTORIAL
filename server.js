// ---------------------------- CONNECTING WITH DATABASE ----------------------------
require('dotenv').config();
const express = require("express");
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user.routes");
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connection established success...'))
    .catch((err) => console.log(err));

// Middleware
server.use(morgan('combined'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    res.send("<h1>Welcome to server.</h1>");
})

server.use("/user", userRoutes);

server.listen(port, () => {
    console.log(`Start at  http://localhost:${port} `);
})











