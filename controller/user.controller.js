const products = require("../product.json");

exports.addNewproduct = (req,res) => {
    // res.send("<h1>Hello this is home Page.</h1>");
    products.push(req.body);
    res.send(products);
    // console.log(products);
}    

exports.getAllproducts = (req,res) => {
    res.send(products);
};

exports.getSingleproduct = (req,res) => {
    let id = +req.params.id;
    let product = products.find((item) => item.id === id);
    res.json(product);
}

exports.replaceProduct = (req,res)=>{
    let id = +req.params.id;
    let productIndex = products.findIndex((item) => item.id === id);
    products.splice(productIndex,1,req.body);
    res.json({message:"Replace data success.."});
}

exports.updateProduct = (req,res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((item) => item.id  === id);
    let mainproduct = products[productIndex];
    products.splice(productIndex , 1 , {...mainproduct,...req.body});
    res.json({message:"update data success.."});
}


