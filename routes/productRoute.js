const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/products')
    .get(productController.getAll)
    .post(productController.create);

module.exports = router;