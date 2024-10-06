const Order = require('../model/order.model');
const Cart = require('../model/cart.model');

exports.addNewOrder = async (req, res) => {
    try {
        let carts = await Cart.find({
            user: req.user._id,
            isDelete: false
        }).populate({ path: "productId" });

        if (carts.length === 0) {
            return res.json({ message: "Your cart is empty.." });
        }
        // res.send(carts);
        let orderItems = carts.map((item) => ({
            productId: item.productId._id,
            quentity: item.quentity,
            price: item.productId.price,
            totalprice: item.quentity * item.productId.price
        }));

        // console.log(orderItems);
        let grandtotal = orderItems.reduce((total, item) => total += item.totalprice, 0);
        // console.log(paidamount);

        let order = await Order.create({
            user: req.user._id,
            items: orderItems,
            paidAmount: grandtotal
        })
        await Cart.updateMany({ user: req.user._id, isDelete: false }, { isDelete: true });
        res.json({ message: "Order placed...", order });

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}

exports.cancelOrder = async (req, res) => {
    try {
        let orderId = req.body._id;
        if (!orderId) {
            return res.status(400).json({ message: "Order ID is required." });
        }

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found." });
        }

        let deleteOrder = await Order.findByIdAndUpdate(orderId, { isDelete: true }, { new: true });
        res.json({ message: "Your order has been cancelled...", deleteOrder });

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}

