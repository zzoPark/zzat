<template>
  <v-row justify="center">
    <v-col v-for="(room, i) in rooms" :key="i">
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 5 : 2">
          <v-list-item two-line>
            <v-list-item-avatar color="primary">
              <v-icon dark>chat</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ room.title }}
              </v-list-item-title>
              <v-chip-group multiple column>
                <v-chip
                  v-for="tag in room.tags"
                  :key="tag"
                  small
                  color="secondary"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>
                <v-icon small color="green">people</v-icon>
                <span class="green--text">{{ room.people }}</span>
              </v-list-item-action-text>
              <v-btn color="primary" outlined>
                JOIN
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    rooms: 'rooms/get'
  }),
  async fetch({ store, params }) {
    await store.dispatch('rooms/fetch')
  },
  methods: {
    dosomething() {
      alert('Do Something')
    }
  }
}
</script>
