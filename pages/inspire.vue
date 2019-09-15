<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <span>{{ message }} </span>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import io from 'socket.io-client'

export default {
  data() {
    return {
      socket: io({ transports: ['websocket'] }),
      message: ''
    }
  },
  mounted() {
    this.socket.on('news', (data) => {
      this.message = data
    })
  }
}
</script>
