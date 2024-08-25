let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String, // Shorthand property
    lastName: {        // Try to use long property more
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    mobileNo: {
        type: String
    },
    age: {
        type: Number
    },
    profileImage: {
        type: String
    }
    ,
    hobbies: [{ type: String }],
    address: {
        line1: String,
        line2: String,
        pincode: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('usersData', userSchema);


