const bcrypt = require('bcrypt')
const express = require('express')
const store = express.Router()
const isAuthenticated = require('../utils/middleware.js')
const Seed = require('../seedData/seed.js')
const Store = require('../models/store.js')

store.get('/', (req, res) => {
    Store.find((err, shop) => {
        if(err){
            console.log(err)
        } else {
            console.log(shop)
            res.render('/shop/index.ejs', {
                shop: shop
            })
        }
    })
})

store.get('/new', (req,res) => {
    res.render('new.ejs')
})

store.get('/seed', (req,res) => {
    Store.create(Seed, (err, data) => {
        if(err){
            console.log(err)
        } else {
            console.log('Seed created')
            res.redirect('/store')
        }
    })
})

module.exports = store