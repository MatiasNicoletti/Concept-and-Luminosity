const catchAsync = require('../utils/catchAsync');
const Artist = require('../models/artistModel');

exports.getAll = catchAsync(async (req, res, next) =>{
    res.status(200).json({
        status: 'success',
        data: 'hola'
    });
});

exports.create = catchAsync(async (req, res, next) =>{
    const artist = await Artist.create(req.body);
    console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: artist
    });
});