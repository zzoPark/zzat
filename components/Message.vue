<template>
  <v-card outlined color="secondary">
    <v-card-text class="body-2 font-weight-bold pb-0">
      {{ message.content }}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="px-2" dense>
        <v-list-item-avatar color="info" size="30" class="my-0 mr-2">
          <v-icon dark>person</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ message.username }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text class="caption">
            {{ message.created }}
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default() {
        return { content: 'There is no message!' }
      }
    }
  }
}
</script>
