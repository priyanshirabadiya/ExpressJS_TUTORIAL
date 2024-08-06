// console.log("sdfsjdgfjsdgfj");


// const express = require('express');
// const app = express();
// app.get('/' , (req,res) => {
//     res.setHeader('Content-type' , 'text/html');
//     res.write('<h1>This is home page.</h1>');
//     res.end();
// })

// app.listen(5555,() => {
//     console.log('Server at http://localhost:5555');
// })


const express = require('express');
const server = express();

server.get('/' , (req,res) => {
    res.setHeader('Content-type' , 'text/html' );
    res.write("<h1>This is home page.</h1>");
    res.end();
});

server.get('/user' , (req,res) => {
    res.setHeader('Content-type' , 'text/html' );
    res.write("<h1>This is user page for checking nodemon.</h1>");
    res.end();
} )

server.listen(2222,() => {
    console.log('server at http://127.0.0.1:2222');    
})





