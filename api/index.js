const logger = require('morgan')
const express = require('express')
const router = express.Router()

const roomsRouter = require('./rooms')
const messagesRouter = require('./messages')

router.use(logger('dev'))
router.use(express.json())
router.use(roomsRouter)
router.use(messagesRouter)

module.exports = router
