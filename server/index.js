const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const session = require('express-session')
const server = require('http').createServer(app)
const socket = require('./socket')
const consola = require('consola')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Define session middleware
  // It will be shared between express & socket.io
  const sessionMiddleware = session({
    secret: process.env.COOKIE_SECRET || 'secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false
    }
  })

  // Give session middleware to express
  app.use(sessionMiddleware)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Connect the socket.io
  socket(server, sessionMiddleware)

  // Listen the server
  server.listen(port, host)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
