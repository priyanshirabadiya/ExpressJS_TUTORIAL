const Cart = require('../model/cart.model');
const Messages = require('../helpers/messages');

exports.addToCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            productId: req.body.productId,
            isDelete: false
        })
        if (cart) {
            res.send({ message: Messages.ALREADY_INCART });
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        res.status(201).json({ message: Messages.ADDED_TOCART, cart })
    } catch (err) {
        console.log(err);
        res.status(500).send(Messages.INTERNAL_SERVER_ERROR);
    }
}


exports.updateCart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cartId = req.body._cartId; // Assuming _cartId is provided in the request body
        // _id and user will get from maincart data 
        let cart = await Cart.findOne({ _id: cartId, user: userId, isDelete: false });
        if (!cart) {
            return res.status(404).json({ message: Messages.CART_NOT_FOUND });
        }
        let updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            { $set: req.body },
            { new: true }
        );
        res.json({ message: Messages.UPDATED_CART, updatedCart });
    } catch (err) {
        console.log(err);
        res.status(500).send(Messages.INTERNAL_SERVER_ERROR);
    }
};


exports.deleteCart = async (req, res) => {
    try {
        let cartId = req.body._cartId;
        let deletecart = await Cart.findByIdAndUpdate(cartId, { isDelete: true }, { new: true });
        res.json({ message: Messages.DELETE_CART, deletecart })
    } catch (err) {
        console.log(err);
        res.status(500).send(Messages.INTERNAL_SERVER_ERROR);
    }
}


exports.getAllCarts = async (req, res) => {
    try {
        let aggregationPipeline = [
            {
                $match: { user: req.user._id, isDelete: false }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "products"
                }
            }
        ];
        console.log(aggregationPipeline);
        let carts = await Cart.aggregate(aggregationPipeline);
        // OR BY USING POPULATE METHOD
        // let carts = await Cart.find({ user: req.user._id, isDelete: false }).populate({ path: "productId" });
        console.log(carts);
        if (!carts) {
            return res.send({ message: Messages.EMPTY_CART });
        }
        res.send(carts);
    } catch (err) {
        console.log(err);
        res.status(500).send(Messages.INTERNAL_SERVER_ERROR);
    }
}
