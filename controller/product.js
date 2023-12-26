//controller는 미들웨어 함수 부분만 구현해 놓음
const { Mongoose } = require('mongoose');
const productModel = require('../models/Product')


exports.createProduct = async (req,res, next) => {
    try {
        const createdProduct = await productModel.create(req.body);
        console.log('createProduct : ',createdProduct)
        res.status(201).json(createdProduct);
    } catch (error) {
        //console.log(error)
        next(error);
    }

}

