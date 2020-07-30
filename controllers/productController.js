const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

exports.create = catchAsync(async(res, req, next)=>{
    const product = await Product.create(req.body);
});