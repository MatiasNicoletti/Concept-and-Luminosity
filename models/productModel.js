const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    artist: {
        type: mongoose.Schema.ObjectId,
        ref: 'Artists',
        required: [true, 'A product must have an artist']
    },
    description: {
        type: String,
        required: [true, 'A product must have a description']
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price']
    },
    type: {
        type: String,
        enum: ['sculpture', 'paint', 'photography'],
        required: [true, 'A product must have a type']
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    },
    measures: [{
        type: Number,
        required: [true, 'A product must have measures']
    }
    ],
    image:{
        type:String
    }
});

productSchema.pre(/^find/, function(next){
    this.populate({
        path: 'artist',
        select: '-products'
    });
    next();
})

productSchema.post('save', async function(doc){
    //get the artist id
    //update the artists products
    const Artist = require('./artistModel'); // to avoid circular reference

    const artist = await Artist.findById(doc.artist);

    let artistProducts = artist.products;
    artistProducts.push(doc._id); 
    
    artist.save();
    
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;