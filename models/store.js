const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = Schema({

    name: {
        type: String,
        required: true
    },

    description: String,

    img: String,

    price: Number,

    quantity: {
        type: Number
    }
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store