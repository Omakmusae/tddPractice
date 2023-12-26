const express = require('express');
const router = express.Router();
const productController = require('./controller/product')

// "/"경로로 post 요청이 오면 productController.createProduct 미들웨어 실행
router.post("/", productController.createProduct) //productController.hello -> 미들웨어

module.exports = router; 