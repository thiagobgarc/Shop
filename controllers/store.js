const bcrypt = require('bcrypt')
const express = require('express')
const store = express.Router()
const isAuthenticated = require('../utils/middleware.js')
const Store = require('../models/store.js')
const Seed = require('../seedData/seed.js')


store.get('/', (req,res) => {
    Store.find((err, store) => {
        if(err) {
            console.log(err)
        } else {
            console.log(store)
            res.render('store-index.ejs', {
                stores: store
            })
        }
    })  
})

store.get('/new', (req,res) => {
    res.render('store-new.ejs')
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

store.get('/:id', (req,res) => {
    Store.findById(req.params.id, (err, foundStore) => {
        if (err){
            console.log(err)
        } else {
            console.log(foundProduct)
            res.render('store-show.ejs', {
                stores: foundStore
            })
        }
    }) 
})

store.get('/:id/edit', (req,res) => {
    // Store.findById(req.params.id, (err, foundStore) => {
    //     if(err){
    //         console.log(err)
    //     } else {
    //         console.log(foundStore)
    //         res.render('store/edit.ejs', {
    //             store: foundStore
    //         })
    //     }
    // })
    res.render('store-edit.ejs')
})

store.put('/', (req,res) => {
    Store.create(req.body, (err, createdStore) => {
        if(err){
            console.log(err)
            res.send(err)
        } else {
            res.redirect('/store')
        }
    })
})



module.exports = store