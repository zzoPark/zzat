<template>
  <v-container fluid>
    <v-row v-for="(room, i) in rooms" :key="i" justify="center">
      <v-col cols="11" md="6">
        <room :room="room" />
      </v-col>
    </v-row>
    <v-row v-if="noRoom" justify="center">
      <v-col cols="11" md="6">
        <no-room-alert :no-room="noRoom" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import Room from "~/components/Room"
import NoRoomAlert from "~/components/NoRoomAlert"

export default {
  components: {
    Room,
    NoRoomAlert,
  },
  async fetch({ store, params }) {
    await store.dispatch("rooms/fetch")
  },
  computed: {
    ...mapGetters({
      rooms: "rooms/get",
    }),
    noRoom() {
      return this.rooms.length === 0
    },
  },
  head: () => ({
    title: "Home",
  }),
}
</script>
