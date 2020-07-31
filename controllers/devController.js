const fs = require('fs');
const Product = require('../models/productModel');
const Artist = require('../models/artistModel');
const catchAsync = require('../utils/catchAsync');
const path = require('path');

exports.pushArtists = catchAsync(async(req, res, next)=>{
    const artistArray = JSON.parse(fs.readFileSync(path.join(__dirname, '../dev-data/artists.json')));
    const artists = await Artist.create(artistArray);

    res.status(200).json({
        status:'success',
        artists
    });

});

exports.pushProducts = catchAsync(async(req, res, next)=>{
    const productArray = JSON.parse(fs.readFileSync(path.join(__dirname, '../dev-data/products.json')));
    const products = await Product.create(productArray);
    
    res.status(200).json({
        status:'success',
        products
       
    });

});

exports.deleteData = catchAsync(async(req, res, next)=>{
    await Product.deleteMany();
    await Artist.deleteMany();

    res.status(200).json({
        status:'success',
        data:'data has been deleted'
    })
});