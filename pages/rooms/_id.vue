<template>
  <v-container fluid>
    <v-container id="container" class="mb-footer" fluid>
      <v-row v-for="(msg, i) in messages" :key="i" justify="center">
        <v-col cols="11" md="6">
          <message :message="msg" />
        </v-col>
      </v-row>
    </v-container>
    <v-footer fixed color="transparent">
      <v-row justify="center">
        <v-col cols="11" md="6" align-self="end">
          <v-textarea
            v-model="content"
            name="content"
            label="Message"
            hide-details
            outlined
            filled
            background-color="white"
          ></v-textarea>
          <v-btn color="primary" block dark @click="add()">Send</v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<style>
.mb-footer {
  margin-bottom: 10rem;
}
</style>

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
      roomId: params.id,
      content: ''
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
        content: this.content,
        created: '2019-10-02 00:00:00'
      }
      this.$store.dispatch('messages/send', message)
    },
    scrollToEnd() {
      const container = this.$el.querySelector('#container')
      this.$vuetify.goTo(container.scrollHeight)
    }
  },
  updated() {
    this.scrollToEnd()
  }
}
</script>
