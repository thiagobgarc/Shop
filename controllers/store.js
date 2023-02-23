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
  Store.findById(req.params.id, (err, store) => {
    if(err) {
        console.log(err)
    } else {
        console.log(store)
        res.render('store-show.ejs', {
            store: store[req.params.id],
            store: store
        })
    } 
  })
    
})

store.get('/:id/edit', (req,res) => {
    Store.findById(req.params.id, (err, foundStore) => {
        if(err){
            console.log(err)
        } else {
            console.log(foundStore)
            res.render('store-edit.ejs', {
                store: foundStore
            })
        }
    })
})

store.post('/', (req,res) => {
    Store.create(req.body, (err, createdStore) => {
        if(err){
            console.log(err)
            res.send(err)
        } else {
            res.redirect('/store')
        }
    })
})

store.put('/:id/edit', (req,res) => {
    Store.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedStore) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Updated ${updatedStore}`)
            res.redirect('/store')
        }
    })
})

store.delete('/:id', (req, res) => {
    Store.findByIdAndDelete(req.params.id, (err, store) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Deleted: ${store}`)
            res.redirect('/store')
        }
    })
})

store.put('/:id/buy-button', (req,res) => {
    Store.findByIdAndUpdate(req.params.id, { $inc: {quantity: -1} }, { new: true }, (err, storeBuy) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`User has bought, ${storeBuy}`)
            res.redirect('/store')
        }
    })
})

store.put('/:id/like', (req,res) => {
    Store.findByIdAndUpdate(req.params.id, { $inc: {like: +1 } }, { new: true }, (err, storeLike) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`User has like ${storeLike}`)
            res.redirect('/store')
        }
    })
})

store.put('/:id/dislike', (req,res) => {
    Store.findByIdAndUpdate(req.params.id, { $inc: { like: -1 } }, { new: true }, (err, storeDislike)=> {
        if(err) {
            console.log(err)
        } else {
            console.log(`User has disliked ${storeDislike}`)
            res.redirect('/store')
        }
    })
})


module.exports = store