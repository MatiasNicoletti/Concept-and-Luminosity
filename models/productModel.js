const mongoose = require('mongoose');
const Artist = require('./artistModel');

const productSchema = new mongoose.Schema({
    name: String,
    artist: {
        type: Artist,
        required: [true, 'A product must have an artist']
    },
    description:{
        type: String,
        required: [true, 'A product must have a description']
    },
    price:{
        type: Number,
        required: [true, 'A product must have a price']
    },
    type:{
        type: String,
        enum: ['sculpture', 'paint', 'photography'],
        required: [true, 'A product must have a type']
    },
    publishedAt:{
        type: Date,
        default: Date.now()
    },
    measures:{
        type: Number,
        required: [true, 'A product must have measures']
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;