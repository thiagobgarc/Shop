//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const session = require('express-session')
const bcrypt = require('bcrypt')
const userController = require('./controllers/users.js')
const homepageController = require('./controllers/homepage.js')
const sessionsController = require('./controllers/sessions_controller.js')
const storeController = require('./controllers/store.js')
// const http = require('http').Server(app)
// const io = require('socket.io')(http)
// const rooms = require('./models/rooms.js')




mongoose.set('strictQuery', true)
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use('/users', userController)
app.use('/sessions', sessionsController)
app.use('/homepage', homepageController)
app.use('/store', storeController)

const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
console.log(hashedString)
console.log(bcrypt.compareSync('yourStringHere', hashedString))

//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.render('index.ejs');
})

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  mongoose.connection.once('open', () => {
    console.log('connected to mongo');
  })

  //   ___________________
// SOCKET.IO
// ___________________

// io.on('connection', (socket) => {
//   console.log('a user connected')

//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   })

//   socket.on('chat message', (msg) => {
//     console.log('Message: ' + msg)
//     io.emit('Message', msg)
//   })
  
// })



//___________________
//Listener
//___________________

app.listen(PORT, () => console.log( 'Listening on port:', PORT));


