// Plugin for socket control over store actions
export default function createSocketPlugin(socket) {
  return (store) => {
    socket.on("connect", () => {
      const currentRoom = store.state.rooms.current
      if (currentRoom) {
        socket.emit("join room", currentRoom)
      }
    })
    socket.on("recieve message", (message) => {
      store.dispatch("messages/recieve", message)
    })
    store.subscribe((mutation) => {
      if (!socket.connected) return
      if (mutation.type === "rooms/join") {
        socket.emit("join room", mutation.payload)
      } else if (mutation.type === "rooms/leave") {
        socket.emit("leave room", mutation.payload)
      }
    })
    store.subscribeAction((action) => {
      if (!socket.connected) return
      if (action.type === "messages/send") {
        socket.emit("send message", action.payload)
      }
    })
  }
}
