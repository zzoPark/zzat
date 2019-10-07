<template>
  <v-container fluid>
    <v-row v-for="(room, i) in rooms" :key="i" justify="center">
      <v-col cols="11" md="6">
        <room :room="room" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Room from '~/components/Room'

export default {
  components: {
    Room
  },
  computed: mapGetters({
    rooms: 'rooms/get'
  }),
  async fetch({ store, params }) {
    await store.dispatch('rooms/fetch')
  }
}
</script>
