const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String, 
        required: true 
    },

    img: {
        type: String,
        required: true
    },

    price: {
        type:Number, 
        required: true 
    },

    quantity: {
        type: Number
    },
    style: {
        type: String
    },
    Capacity: {
        type: String
    },
    modelNames: {
        type: String
    },
    technology: {
        type: String
    },
    color: {
        type: String
    },
    carrier: {
        type: String
    },
    used: {
        type: Boolean
    }
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store