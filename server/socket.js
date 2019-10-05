module.exports = (server, sessionMiddleware) => {
  const io = require('socket.io')(server)

  // Give session middleware to socket.io
  // Now we can use socket.request.session
  io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res || {}, next)
  })
  
  // Dealing with events
  io.on('connection', (socket) => {
    const sessionId = socket.request.sessionID
    console.log(`${sessionId} connected!`)

    socket.on('join room', (data) => {
      socket.join(data)
      console.log(`${sessionId} joined room ${data}!`)
      socket.emit('news', { joined: `room ${data}` })
    })

    socket.on('leave room', (data) => {
      socket.leave(data)
      console.log(`${sessionId} left room ${data}!`)
      socket.emit('news', { left: `room ${data}` })
    })

    socket.on('send message', (data) => {
      socket.to(data.room).emit('recieve message', data)
    })
    
    socket.on('error', (error) => {
      console.error(error)
    })
 
    socket.on('disconnect', () => {
      console.log(`${sessionId} disconnected!`)
    })
  })
}
