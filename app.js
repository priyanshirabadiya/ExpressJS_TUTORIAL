let express = require('express');
let app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const UserRouter = require('./routes/user.routes');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("database connection established...."))
    .catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("<h1>Welcome to server.</h1>");
})

app.use("/user" , UserRouter );

app.listen(1133, () => {
    console.log('Server start at http://localhost:1133');
})
