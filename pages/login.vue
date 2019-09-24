<template>
  <v-row align="center" justify="center">
    <v-col sm="12" md="3">
      <v-card>
        <v-card-title>
          <span class="primary--text font-weight-black">ZZAT</span>
          <v-spacer />
          <v-icon color="primary">chat_bubble</v-icon>
          <v-icon color="primary">chat</v-icon>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="USERNAME"
              name="login"
              prepend-icon="person"
              type="text"
            ></v-text-field>
            <v-text-field
              label="PASSWORD"
              name="password"
              prepend-icon="lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" dark depressed>SIGN IN</v-btn>
          <v-btn color="primary" outlined>SIGN UP</v-btn>
          <div class="flex-grow-1"></div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'login'
}
</script>
