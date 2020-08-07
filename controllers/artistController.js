const catchAsync = require('../utils/catchAsync');
const Artist = require('../models/artistModel');

exports.getAll = catchAsync(async (req, res, next) =>{
    const artists = await Artist.find();

    res.status(200).json({
        status: 'success',
        data: artists
    });
});


exports.create = catchAsync(async (req, res, next) =>{
    const artist = await Artist.create(req.body);
   
    res.status(200).json({
        status: 'success',
        data: artist
    });
});

exports.getOne = catchAsync(async (req, res, next) =>{
    const artist = await Artist.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: artist
    });
});