const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/registration', (req,res) => {
    res.render('sessions/new.ejs')
})

module.exports = sessions