const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    dishId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true 
    },
    price : {
        type : String,
        required: true 
    },
    quantity : {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('favorite', favoriteSchema);