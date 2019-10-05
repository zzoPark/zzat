const express = require('express')

const router = express.Router()

router.get('/rooms', (req, res) => {
  try {
    const rooms = [
     {
        id: 1,
        title: 'Chat Room 1',
        tags: ['chat', 'room', 'room1', 'zzo'],
        people: 15
      },
      {
        id: 2,
        title: 'Chat Room 2',
        tags: ['chat', 'room', 'room2', 'zzo'],
        people: 20
      }
    ]
    res.json(rooms)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.post('/rooms', (req, res) => {
  try {
    const room = req.params.room
    res.json(room)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/rooms/:id', (req, res) => {
  try {
    const id = req.params.id
    const room = {id}
    res.json(room)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.put('/rooms/:id', (req, res) => {
  try {
    const id = req.params.id
    const room = {id}
    res.json(room)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router
