<template>
  <v-layout>
    <v-flex class="text-center">
      <span>{{ message }} </span>
    </v-flex>
  </v-layout>
</template>

<script>
import socket from '~/plugins/socket.io.js'

export default {
  asyncData({ params }) {
    return {
      roomId: params.id,
      message: ''
    }
  },
  beforeMount() {
    socket.emit('join room', this.roomId)
    socket.on('news', (data) => {
      this.message = data
    })
  },
  beforeRouteLeave(to, from, next) {
    socket.emit('leave room', this.roomId)
    next()
  }
}
</script>
