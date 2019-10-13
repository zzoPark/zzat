const express = require('express')
const router = express.Router()

const roomsRouter = require('./rooms')
const messagesRouter = require('./messages')

router.use(roomsRouter)
router.use(messagesRouter)

module.exports = router
