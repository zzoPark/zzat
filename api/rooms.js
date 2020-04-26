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
      slug: req.body.slug,
      title: req.body.title,
      tags: req.body.tags,
      description: req.body.description
    })
    const newRoom = await room.save()
    res.location(`/rooms/${newRoom.slug}`)
    res.status(201).json(newRoom)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.head('/rooms/:slug', async (req, res) => {
  try {
    const exists = await Room.exists({ slug: req.params.slug })
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

router.get('/rooms/:slug', async (req, res) => {
  try {
    const room = await Room.findOne({ slug: req.params.slug })
    res.json(room)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.put('/rooms/:id', async (req, res) => {
  try {
    await Room.findByIdAndUpdate(req.params.id, {
      slug: req.body.slug,
      title: req.body.title,
      tags: req.body.tags,
      description: req.body.description
    })
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router
