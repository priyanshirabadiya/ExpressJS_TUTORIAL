// --------Lec-4 error-handling middleware/router middleware/Built-in middleware-----

// -------------------------- Error handling middleware  -------------------------- 

// const express = require('express');
// const server = express();

// server.use((err,req,res,next) => {
//     console.error(err.stack);
//     res.status(500).send("Somthing Broke..!")
// })

// server.get('/' , (req,res) => {
//     res.send("Welcome to server");    
// } )

// server.listen(1122,()=>{
//     console.log('Server at http://localhost:1122');
// })


// const express = require('express');
// const server = express();

// // Define a route that intentionally triggers an error
// server.get('/', (req, res, next) => {
//     const err = new Error("Something went wrong!");
//     next(err);
// });

// // Error-handling middleware
// server.use("/",(err, req, res, next) => {
//     // console.error(err);  // Log the error stack trace for debugging
//     res.status(500).send("Something Broke..!");  // Send a 500 error response
// });

// // Start the server
// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });


// -------------------------- Route middleware -------------------------- 







// -------------------------- Built-in middleware -------------------------- 

// First type express.json()

const express = require('express');
const server = express();

server.use(express.json());

const myFun = (req,res,next) => {
    console.log("Headers: ", req.headers); 
    console.log(req.body);              
    // set method post then select row and select json data and add json like this 
    // {
    //     "Fname" : "priyanshi",
    //     "sname" : "R"
    // }
    next();
}

// server.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })


// server.get("/login" , (req,res) =>{
//     res.write("Welcome to LoginPage")
//     res.end();
// })

server.post("/", myFun, (req,res) =>{
    res.setHeader('Content-type', "application/json"  )
    res.write("Welcome to expressJS post ")
    res.end();
})

server.listen(1122, () => {
    console.log('Server running at http://localhost:1122');
});

// Second type urlencoded


// const express = require('express');
// const server = express();

// server.use(express.urlencoded({extended:false}));

// const myFun = (req,res,next) => {
//     console.log(req.body);              
//     next();
// }

// server.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })

// server.get("/login",myFun ,(req,res) =>{
//     res.write("Welcome to loginPAGE.")
//     res.end();
// })

// server.post("/", (req,res) =>{
//     res.setHeader('Content-type', "application/json" )
//     res.write("Welcome to expressJS post ")
//     res.end();
// })

// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });



// static express
// const express = require('express');
// const server = express();

// // server.use(express.urlencoded({extended:false}));
// server.use("/hello",express.static('public'));   // create folder named public then  create one file in that folder and apply routes in url

// const myFun = (req,res,next) => {
//     console.log(req.body);              
//     next();
// }

// server.get("/" ,(req,res) =>{
//     res.write("Welcome to expressJS")
//     res.end();
// })

// server.get("/login",myFun ,(req,res) =>{
//     res.write("Welcome to loginPAGE.")
//     res.end();
// })

// server.post("/", (req,res) =>{
//     res.setHeader('Content-type', "application/json" )
//     res.write("Welcome to expressJS post ")
//     res.end();
// })

// server.listen(1122, () => {
//     console.log('Server running at http://localhost:1122');
// });
