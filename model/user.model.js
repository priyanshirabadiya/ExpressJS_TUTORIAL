const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email:{
        type : String,
        unique: true
    },
    password : {
        type : String
    },
    isDelete : {
        type : Boolean,
        default : false
    }
},
{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model('users' , userSchema);

