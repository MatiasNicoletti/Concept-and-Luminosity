const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');


exports.getHome = (req, res, next)=>{

    res.status(200).render('base');
}

exports.getGallery = catchAsync(async(req, res, next)=>{
    const products = await Product.find();
 
    res.status(200).render('gallery',{ 
        products});
});

exports.getProduct = catchAsync(async(req, res, next)=>{
    const product = await Product.findById(req.params.id);
    
    res.status(200).render('product',{ 
        product});
});