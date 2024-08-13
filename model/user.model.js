let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String, // Shorthand property
    lastName : {
        type : String ,
    },
    email : {
        type : String
    },
    age:{
        type : Number
    },
    hobbies : [{type:String}],
    address : {
        line1 : String,
        line2 : String,
        pincode : Number
    }
});

module.exports = mongoose.model('users', userSchema);

