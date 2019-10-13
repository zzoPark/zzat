module.exports = (server, session) => {
  const io = require('socket.io')(server)

  // Give session middleware to socket.io
  // Now we can use socket.request.session
  io.use((socket, next) => {
    session(socket.request, socket.request.res || {}, next)
  })

  // Dealing with events
  io.on('connection', (socket) => {
    const sessionId = socket.request.sessionID
    console.log(`${sessionId} connected!`)

    socket.on('join room', (room) => {
      socket.join(room.id)
      console.log(`${sessionId} joined room ${room.title}!`)
    })

    socket.on('leave room', (room) => {
      socket.leave(room.id)
      console.log(`${sessionId} left room ${room.title}!`)
    })

    socket.on('send message', (message) => {
      socket.to(message.room).emit('recieve message', message)
    })

    socket.on('error', (error) => {
      console.error(error)
    })

    socket.on('disconnect', () => {
      console.log(`${sessionId} disconnected!`)
    })
  })
}
