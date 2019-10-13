const express = require('express')
const router = express.Router()

const Message = require('../models/message')

router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({})
    res.json(messages)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/messages', async (req, res) => {
  try {
    const message = new Message({
      room: req.body.room,
      user: req.body.user,
      content: req.body.content
    })
    const newMessage = await message.save()
    res.status(201).json(newMessage)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router
