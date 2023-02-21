const bcrypt = require('bcrypt')
const express = require('express')
const homepage = express.Router()
const isAuthenticated = require('../utils/middleware.js')
const rooms = require('../models/rooms.js')
// const http = require('http').Server(homepage)
// const io = require('socket.io')(http)

// homepage.use(isAuthenticated)

homepage.get('/chatroom', (req,res) => {
    res.render('chatroom.ejs', {
        rooms: rooms
    })
  })
  
  homepage.get('/:room', (req,res) => {
    res.render('rooms.ejs', {
        rooms: rooms
    })
  })



module.exports = homepage