<template>
  <v-row justify="center">
    <v-col v-for="(room, i) in rooms" :key="i">
      <div class="flex-grow-1"></div>
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 5 : 1" @click="dosomething">
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-icon>chat</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="room.title" />
              <v-chip-group multiple column>
                <v-chip v-for="tag in room.tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-hover>
      <div class="flex-grow-1"></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        {
          title: 'Chat Room 1',
          tags: ['chat', 'room', 'room1', 'zzo']
        },
        {
          title: 'Chat Room 2',
          tags: ['chat', 'room', 'room2', 'zzo']
        }
      ]
    }
  },
  methods: {
    dosomething() {
      alert('Do Something')
    }
  }
}
</script>
