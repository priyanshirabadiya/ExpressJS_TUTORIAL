// Middlewares

const express = require('express');
const server = express();

// Application level middleware 

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

server.use("/", (req,res,next) => {
    console.log('Time:' , Date.now());
    res.send("Success");
    next();
})
// ---------------------------------------------------------------------------
// add this kind of url : http://localhost:3001/user/1

server.use('/user/:id' , (req,res,next) => {
    // console.log('Request type:' , req.method);  // Request type : GET
    // console.log('original url:' , req.originalUrl); // original url :  /user/1   
    console.log('ID:',req.params.id);  // ID:8
    next();
})

server.get("/user/:id" , (req,res) => {
    res.setHeader("Content-type" , "text/html" );
    res.write("<h1>This is another path</h1>")
    res.end();
    // res.send(req.params.id);  // print 8 in output
})

server.get("/" , (req,res) => {
    console.log("Welcom page.");
    res.setHeader("Content-type" , "text/html" );
    res.write("<h1>Hello welcome after calling application server.</h1>")
    res.end();
})

// ---------------------------------------------------------------------------

server.get("/user/:id" , (req,res,next) => {
    // if the user ID is 0, skip to the next route
    if(req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next();
},
(req,res,next) => {
    res.send("regular");
})

server.get('/user/:id' , (req,res,next) => {
    res.send('Special');
})

// ---------------------------------------------------------------------------
// Middleware can also be declared in an array for reusability.

function logOriginalUrl(req,res,next){
    console.log("Url is : " , req.originalUrl );
    next();
}

function logMethod(req,res,next){
    console.log('Method is : ' , req.method);
    next();
}

const logStuff = [logOriginalUrl , logMethod];

server.get("/user/:id" , logStuff , (req,res,next) => {
    res.send("This is user information.");
})



server.listen(3001, () => {
    console.log('server strt at http://localhost:3001 ');
})







