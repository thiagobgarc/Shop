const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = Schema({

    name: {
        type: String
    },

    description: {
        type: String
    },

    img: {
        type: String
    },

    price: {
        type:Number
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
    },
    like: {
        type: Number
    }
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store