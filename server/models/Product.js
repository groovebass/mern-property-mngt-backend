const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 300
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    location: {
        type: String,
        default: "Sea Point"
    },
    bedrooms: {
        type: Number,
        default: 0
    },
    bathrooms: {
        type: Number,
        default: 0
    },
    parking: {
        type: Number,
        default: 0
    },
    rentOrBuy: {
        type: String,
        default: 'Rent'
    },
    floor: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product } 