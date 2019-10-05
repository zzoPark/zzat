export default function createSocketPlugin(socket) {
  return (store) => {
    socket.on('recieve message', (message) => {
      store.dispatch('messages/recieve', message)
    })
    store.subscribeAction((action) => {
      if (action.type === 'messages/send') {
        socket.emit('send message', action.payload)
      }
    })
  }
}
