// const Product = require('../model/product.model');
const productServices = require('../services/product.service');
let Message = require('../helpers/messages');

exports.addProduct = async (req, res) => {
    try {
        let product = await productServices.getProduct({
            productName: req.body.productName,
            isDelete: false
        });
        if (product) {
            return res.send({ message: Message.ALREDY_EXIST_PRODUCT });
        }
        product = await productServices.addNewProduct(req.body);
        res.send({ message: Message.ADD_NEW_PRODUCT, product });

    } catch (err) {
        console.log(err);
        res.status(500).send(Messages.INTERNAL_SERVER_ERROR);
    }
}

exports.getAllproducts = async (req, res) => {
    try {
        let products = await productServices.getAllProducts({ isDelete: false });
        res.send(products);
    } catch (err) {
        console.log(err);
        res.status(500).send(Messages.INTERNAL_SERVER_ERROR);
    }
}
