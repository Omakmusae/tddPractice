

//위 hello 내용은 미들웨어 부분, 이부분을 routes에서 가져와서 사용

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

exports.getProducts = async(req,res,next)=> {
    const result = await productModel.find({});
    console.log(result)
    res.status(201).json(result)
}
