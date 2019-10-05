<template>
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
            <v-chip v-for="tag in room.tags" :key="tag" small color="secondary">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text class="online--text">
            {{ room.people }}
            <v-icon small color="online">people</v-icon>
          </v-list-item-action-text>
          <v-btn outlined color="primary" :to="`rooms/${room.id}`">
            JOIN
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      default() {
        return { title: 'There is no room!' }
      }
    }
  }
}
</script>
