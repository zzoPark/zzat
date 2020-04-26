const app = require('express')()
const server = require('http').createServer(app)
const { Nuxt, Builder } = require('nuxt')

const consola = require('consola')
const config = require('../nuxt.config.js')
const connect = require('./connect')
const session = require('./session')
const socket = require('./socket')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

const start = async () => {
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

  // Connect to MongoDB with mongoose
  connect()

  // Give session middleware to express
  app.use(session)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Connect the socket.io with session
  socket(server, session)

  // Listen the server
  server.listen(port, host)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
