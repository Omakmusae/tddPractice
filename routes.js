const express = require('express');
const router = express.Router();
const productController = require('./controller/product')

router.post("/", productController.createProduct) //productController.hello -> 미들웨어

module.exports = router; 