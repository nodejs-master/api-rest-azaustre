'use strict'
/* Este fichero contiene el Schema del modelo de producto */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: String,
    picture: String, 
    price: { type: Number, default: 0},
    category: { type: String, enum: ['computer', 'phones', 'accesories']},
    description: String
})

module.exports = mongoose.model('Product', ProductSchema);