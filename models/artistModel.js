const mongoose = require('mongoose');
const Product = require('./productModel').schema;

const artistSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'An artist must have a name']
    },
    products: [Product]
});

const Artist = mongoose.model('Artists', artistSchema);

module.exports = Artist;