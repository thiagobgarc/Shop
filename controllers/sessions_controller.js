const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/login', (req,res) => {
    res.render('users/sessions.ejs')
})

sessions.post('/', (req, res) => {
    User.findOne( { username: req.body.username }, (err, foundUser) => {
        if(err) {
            console.log(err)
            res.send('Something went wrong, try again')
        } else if (!foundUser){
            console.log(!foundUser)
            req.send('Something went wrong, try again')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                console.log(foundUser)
                res.redirect('/homepage/shop')
            }
        }
    })
})

sessions.delete('/', (req,res) => {
    req.session.destroy(() => res.redirect('/users'))
})

module.exports = sessions