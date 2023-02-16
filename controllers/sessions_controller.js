const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/login', (req,res) => {
    res.render('users/sessions.ejs')
})

module.exports = sessions