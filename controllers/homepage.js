const bcrypt = require('bcrypt')
const express = require('express')
const homepage = express.Router()
const isAuthenticated = require('../utils/middleware.js')

homepage.use(isAuthenticated)

homepage.get('/home', (req,res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    })
})

homepage.get('/:portuguese', (req,res) => {
    res.render('show.ejs', {
        currentUser: req.session.currentUser
    })
})

module.exports = homepage