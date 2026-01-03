require('dotenv').config();
const express = require("express");
const server = express();
const mongoose = require('mongoose');
const userRoutes = require("./routes/user.routes");
const port = process.env.PORT;
const path = require('path');
const ejs = require('ejs');
// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.set('view engine' , 'ejs')

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connection established success...'))
    .catch((err) => console.log(err));


// To show image in server side
server.use("public/images" , express.static(path.join(__dirname , "public/images")));

server.get("/", (req, res) => {
    res.send("<h1>Welcome to server.</h1>");
});

server.use("/user", userRoutes);

server.listen(port, () => {
    console.log(`Start at  http://localhost:${port} `);
})

