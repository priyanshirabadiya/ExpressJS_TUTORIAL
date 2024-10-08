const Product = require('../model/product.model');

class ProductServices {
    async addNewProduct(body) {
        return await Product.create(body);
    }
    async getProduct(body) {
        try {
            return await Product.findOne(body);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getAllProducts(body){
        return Product.find(body);
    }
};

module.exports = new ProductServices;
