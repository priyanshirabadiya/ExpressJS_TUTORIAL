const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    items : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'products'
            },
            quantity : {
                type : Number
            },
            totalPrice : Number
        }
    ],
    paidAmount : Number,
    isDelete : {
        type : Boolean,
        default : false
    }
},
{
    versionKey : false,
    timestamps : true
})


module.exports = mongoose.model('orders' , orderSchema )

