const express = require('express');
const router = express.Router();
const productConstrller = require('./controller/product')

router.get("/", productConstrller.hello)

module.exports = router; 