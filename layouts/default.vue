<template>
  <v-app>
    <v-app-bar app clipped-left dark color="blue">
      <span class="title ml-3 mr-7">
        ZZAT
      </span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        prepend-inner-icon="search"
        label="Search"
      ></v-text-field>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>
