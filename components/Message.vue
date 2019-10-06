<template>
  <v-card outlined color="secondary" :width="messageWidth">
    <v-card-text class="body-1 font-weight-bold">
      {{ message.content }}
    </v-card-text>
    <v-card-actions>
      <v-list-item>
        <v-list-item-avatar color="info" size="30" class="my-0 mr-2">
          <v-icon dark>person</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">
            {{ message.username }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text>
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
  },
  computed: {
    messageWidth() {
      if (this.$vuetify.breakpoint.smAndDown) return '90%'
      else return '50%'
    }
  }
}
</script>
