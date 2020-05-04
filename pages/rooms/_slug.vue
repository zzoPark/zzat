<template>
  <v-container ref="container" fluid>
    <span>{{ currentRoom }}</span>
    <v-container ref="messages" :style="messagesMargin">
      <v-row v-for="(msg, i) in messages" :key="i" justify="center">
        <v-col cols="11" md="6">
          <message :message="msg" />
        </v-col>
      </v-row>
    </v-container>
    <v-footer ref="sender" fixed>
      <v-row justify="center">
        <v-col cols="11" md="6">
          <v-textarea
            v-model="content"
            name="content"
            label="Send a message"
            outlined
            filled
            background-color="white"
            hide-details
            auto-grow
            rows="1"
            clearable
            append-icon="send"
            @click:append="send()"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<style>
textarea[name="content"] {
  margin-top: 0 !important;
}
</style>

<script>
import { mapGetters } from "vuex"
import Message from "~/components/Message"

export default {
  async validate({ params, store }) {
    const isAlphanumeric = /^[a-zA-Z0-9_]+$/.test(params.slug)
    if (!isAlphanumeric) return false
    const exists = await store.dispatch("rooms/exists", params.slug)
    return exists
  },
  components: {
    Message,
  },
  async fetch({ store, params }) {
    await store.dispatch("rooms/join", params.slug)
    await store.dispatch("messages/fetch")
  },
  data() {
    return {
      content: "",
      footerHeight: 0,
    }
  },
  computed: {
    ...mapGetters({
      messages: "messages/get",
      currentRoom: "rooms/current",
    }),
    messagesMargin() {
      return { marginBottom: this.footerHeight + "px" }
    },
  },
  mounted() {
    this.setFooterHeight()
  },
  updated() {
    this.scrollToEnd()
    this.setFooterHeight()
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("rooms/leave", this.currentRoom)
    next()
  },
  methods: {
    send() {
      const message = {
        room: this.currentRoom._id,
        user: "zzo",
        content: this.content,
      }
      this.$store.dispatch("messages/send", message)
    },
    scrollToEnd() {
      const container = this.$refs.messages
      this.$vuetify.goTo(container.scrollHeight)
    },
    setFooterHeight() {
      this.footerHeight = this.$refs.sender.$el.clientHeight
    },
  },
  head() {
    return this.$getRoomHead(this.currentRoom || {})
  },
}
</script>
