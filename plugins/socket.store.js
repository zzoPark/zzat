// Plugin for socket control over store actions
export default function createSocketPlugin(socket) {
  return (store) => {
    socket.on('recieve message', (message) => {
      store.dispatch('messages/recieve', message)
    })
    store.subscribeAction((action) => {
      if (action.type === 'messages/send') {
        socket.emit('send message', action.payload)
      } else if (action.type === 'rooms/join') {
        socket.emit('join room', action.payload)
      }
    })
  }
}
