const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

exports.create = catchAsync(async(req, res, next)=>{
    const product = await Product.create(req.body);

    res.status(200).json({
        status: 'success',
        data: product
    });
});

exports.getAll = catchAsync(async(req, res, next)=>{
    const products = await Product.find();

    res.status(200).json({
        status: 'success',
        data: products
    });
});