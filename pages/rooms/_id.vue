<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-row
        v-for="(msg, i) in messages"
        :key="i"
        class="pa-2"
        justify="center"
      >
        <message :message="msg" />
      </v-row>
    </v-col>
    <v-col cols="12" align-self="end">
      <v-textarea v-model="content" name="content" label="Message" outlined>
      </v-textarea>
      <v-btn color="primary" block dark @click="add()">Send</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from '~/components/Message'

export default {
  components: {
    Message
  },
  computed: {
    ...mapGetters({
      messages: 'messages/get'
    })
  },
  asyncData({ params }) {
    return {
      roomId: params.id
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('rooms/join', params.id)
    await store.dispatch('messages/fetch')
  },
  methods: {
    add() {
      const message = {
        room: this.roomId,
        username: 'zzo',
        content: this.content
      }
      this.$store.dispatch('messages/send', message)
    }
  }
}
</script>
