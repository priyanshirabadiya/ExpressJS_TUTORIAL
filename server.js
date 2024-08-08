// CRUD OPERATION / get and send methods

const express = require('express');
const server = express();


const fs = require('fs');
const data = fs.readFileSync('./dummy.js' , 'utf-8');

// POST , GET , PUT , PATCH , DELETE method

server.get('/' , (req,res) => {
    res.write("<h1>Hello this is home page</h1>");
    res.end();
})

server.get('/about' , (req,res) => {
    res.end("<h1>This is ABOUT page</h1>");
})

// POST METHOD

server.post('/',(req,res) => {
    res.send('<h1>POST method</h1>');    // send methods
})

// PUT / PATCH UPDATING METHOD

server.put("/" , (req,res) => {
    res.json({message:"Hello this is put method."});
})

server.patch("/" , (req,res) => {
    res.status(400);   // default 200 for success 
    res.json({message : "hello patch method is called."});
})

server.delete('/' , (req,res) => {
    res.write(data);
    res.end();  // must need to end()
})

server.listen(1111,() => {
    console.log('Server start at http://localhost:1111');
})
