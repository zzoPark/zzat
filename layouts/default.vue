<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <span class="title font-weight-black mr-3">
        ZZAT
      </span>
      <div class="flex-grow-1"></div>
      <v-text-field
        solo-inverted
        flat
        hide-details
        append-icon="search"
        label="Search"
      ></v-text-field>
      <div class="flex-grow-1"></div>
      <v-avatar class="ml-3" color="accent">
        <v-icon large>person</v-icon>
      </v-avatar>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
