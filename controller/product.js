const productModel = require('../models/Product')


exports.createProduct = async (req,res, next) => {
    
    const newProd = new productModel(req.body)
    console.log(newProd + '!!!!!!!!!!!!!!!!!')
    const createdProduct = await newProd.save();
    console.log(createdProduct)
    res.status(201).json(createdProduct);
}