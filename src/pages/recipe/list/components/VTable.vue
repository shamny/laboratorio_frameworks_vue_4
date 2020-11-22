<template>
  <v-data-table
    :headers="headers"
    :items="recipes"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.actions`]="{ item }">
        <v-btn text icon :to="routeEdit(item)">
        <v-icon>edit</v-icon>
      </v-btn>
      </template>
      </v-data-table>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";
import { baseRoutes } from "../../../../router";

export default Vue.extend({
  name: "VTableComponent",
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
  },
  data() {
      return{ headers: [
          { text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Description',
            sortable: true,
            value: 'description',
          },
          {text: 'Actions',
           value: 'actions', 
           sortable: false,
           }]
    }},
 methods: {
    routeEdit (item) {
        return `${baseRoutes.recipe}/${item.id}`;
    },
 },
});
</script>
