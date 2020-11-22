<template>
  <div >
    <v-snackbar
      color="red darken-2"
      v-model="dataSnackBar.isVisible"
      @blur="() => closeSnackBar()"
    >
      {{ dataSnackBar.errorText }}
    <v-btn color="blue" text  @click="() => closeSnackBar()" > Close </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue,{ PropOptions }  from "vue";
import Vuetify from 'vuetify';

export default Vue.extend({
  name: "ErrorSnackBar",
  props: {
    dataSnackBar: { required: true } as PropOptions<{string, boolean}>,
    closeSnackBar:{required:true} as PropOptions<() => void>,
    openSnackBar:{required:true} as PropOptions<() => void>,
  },
 });
</script>