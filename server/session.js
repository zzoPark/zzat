const session = require('express-session')

const sessionMiddleware = session({
  secret: process.env.COOKIE_SECRET || 'secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false
  }
})

module.exports = sessionMiddleware
