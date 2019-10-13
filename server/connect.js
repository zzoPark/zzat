const mongoose = require('mongoose')

const connect = () => {
  const { NODE_ENV, DB_URL, DB_NAME } = process.env
  if (NODE_ENV !== 'production') {
    mongoose.set('debug', true)
  }
  mongoose.set('useCreateIndex', true)

  mongoose.connect(DB_URL, {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection
  db.on('connecting', () => {
    console.log(`Connecting to database ${DB_NAME}...`)
  })
  db.once('connected', () => {
    console.log(`Connected to database ${DB_NAME}`)
  })
  db.on('disconnected', () => {
    console.error(`Disconnected from database ${DB_NAME}`)
  })
  db.on('reconnected', () => {
    console.error(`Reconnected to database ${DB_NAME}`)
  })
  db.on('reconnectFailed', () => {
    console.error(`Reconnection to database ${DB_NAME} failed`)
  })
  db.on('error', console.error.bind(console, 'Connection error:'))

  require('../models')
}

module.exports = connect
