<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    persistent
    max-width="600"
    no-click-animation
  >
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on"><v-icon>add</v-icon>Room</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="font-weight-black primary--text">Chat Room</span>
        <v-spacer />
        <v-btn icon small dark color="primary" @click="close">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="room.title"
            :rules="rules.title"
            label="Title"
            append-icon="title"
            counter
            maxlength="55"
            required
          ></v-text-field>
          <v-text-field
            v-model="room.slug"
            :rules="rules.slug"
            label="Slug"
            append-icon="link"
            prefix="www.zzat.com/rooms/"
            counter
            maxlength="55"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="px-6 pb-4">
        <v-btn text color="primary" @click="reset">
          clear
        </v-btn>
        <v-spacer />
        <v-btn depressed :disabled="!valid" color="primary" @click="add(room)">
          create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      dialog: false,
      valid: false,
      rules: {
        title: this.$validation.title,
        slug: this.$validation.slug,
      },
      room: {
        title: "",
        slug: "",
        tags: [],
        description: "",
      },
    }
  },
  methods: {
    ...mapActions({
      add: "rooms/add",
    }),
    reset() {
      this.$refs.form.reset()
    },
    close() {
      this.reset()
      this.dialog = false
    },
  },
}
</script>
