const express = require('express');
const server = express();

const muFun = (req, res, next) => {
    if (req.query.age >= '18') {
        console.log('Success');
        next();
    }
    else {
        res.json({ message: "Sorry there is an issue..." });
    }
}

server.use(muFun);   // application

server.get("/", (req, res) => {
    res.end("Welcome to express js page")
})

server.post("/login", (req, res) => {
    res.send("<h1>Post send method</h1>")
})

server.listen(1122, () => {
    console.log('Server started at http://localhost:1122');
})


