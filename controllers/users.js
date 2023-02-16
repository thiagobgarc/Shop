const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/registration', (req,res) => {
    // res.render('users/new.ejs')
    res.send('I see something')
})

module.exports = users