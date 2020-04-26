<!-- @format -->

<template>
  <v-alert
    v-model="noRoom"
    color="accent"
    border="left"
    elevation="2"
    colored-border
    icon="info"
    prominent
    dense
  >
    <v-row align="center">
      <v-col class="grow">
        There is no chat room. You can add a new one now!
      </v-col>
      <v-col class="shrink">
        <add-room />
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
import AddRoom from "~/components/AddRoom"

export default {
  components: {
    AddRoom,
  },
  props: {
    noRoom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
