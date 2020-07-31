const mongoose = require('mongoose');
const Product = require('./productModel');

const artistSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId
    },
    name: {
        type: String,
        required: [true, 'An artist must have a name']
    },
    products: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            default: []
        }
    ]

});

artistSchema.post('save', () => {
    console.log(Product);
});

const Artist = mongoose.model('Artists', artistSchema);

module.exports = Artist;