const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/login', (req,res) => {
    res.render('users/sessions.ejs', { currentUser: req.session.currentUser })
})

sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(err) {
            console.log(err)
            res.send('Something went wrong, try again')
        } else if (!foundUser){
            req.send('Something went wrong, try again')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                res.redirect('/login')
            } else {
                res.send('Something went wrong, try again')
            }
        }
    })
})

// sessions.delete('/', (req,res) => {
//     req.session.destroy(() => res.redirect(''))
// })

module.exports = sessions