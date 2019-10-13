const express = require('express')
const router = express.Router()

const Room = require('../models/room')

router.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find({})
    res.json(rooms)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/rooms', async (req, res) => {
  try {
    const room = new Room({
      url: req.body.url,
      title: req.body.title,
      tags: req.body.tags
    })
    const newRoom = await room.save()
    res.location(`/rooms/${newRoom.url}`)
    res.status(201).json(newRoom)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.head('/rooms/:url', async (req, res) => {
  try {
    const exists = await Room.exists({ url: req.params.url })
    if (exists) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (error) {
    console.error(error)
    res.status(500).end()
  }
})

router.get('/rooms/:url', async (req, res) => {
  try {
    const room = await Room.findOne({ url: req.params.url })
    res.json(room)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.put('/rooms/:id', async (req, res) => {
  try {
    await Room.findByIdAndUpdate(req.params.id, {
      url: req.body.url,
      title: req.body.title,
      tags: req.body.tags
    })
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router
