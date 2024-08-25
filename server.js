// ---------------------------- CONNECTING WITH DATABASE ----------------------------
require('dotenv').config();
const express = require("express");
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user.routes");
const port = process.env.PORT;
// Middleware
server.use(morgan('combined'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
const cors = require('cors');
const path = require('path');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connection established success...'))
    .catch((err) => console.log(err));


// To show image in server side
server.use("public/images" , express.static(path.join(__dirname , "public/images")));
// server.use("/public" , express.static(path.join(__dirname , 'public')));

server.get("/", (req, res) => {
    res.send("<h1>Welcome to server.</h1>");
});

server.use("/user", userRoutes);

server.listen(port, () => {
    console.log(`Start at  http://localhost:${port} `);
})











