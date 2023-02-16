const bcrypt = require('bcrypt')
const express = require('express')
const homepage = express.Router()

homepage.get('/home', (req,res) => {
    res.render('index.ejs')
})

module.exports = homepage