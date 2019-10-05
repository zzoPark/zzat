<template>
  <v-layout>
    <v-flex class="text-center">
      <p v-for="(msg, i) in messages" :key="i">{{ msg.content }}</p>
      <v-btn @click="add()">Add</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    messages: 'messages/get'
  }),
  asyncData({ params }) {
    return {
      roomId: params.id
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('messages/fetch')
  },
  methods: {
    add() {
      const message = {
        id: 3,
        room: 1,
        username: 'zzo',
        content: 'some message'
      }
      this.$store.dispatch('messages/send', message)
    }
  }
}
</script>
