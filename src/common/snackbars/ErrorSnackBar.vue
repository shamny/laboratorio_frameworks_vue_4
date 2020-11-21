<template>
  <div >
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from 'vuetify';

export default Vue.extend({
  name: "ErrorSnackBar",
  data: () => ({
    snackbar: false,
    text: 'My timeout is set to 2000.',
    timeout: 2000,
  }),
  });
</script>