<template>
  <app-layout>
    <v-card>
      <v-card-title class="text-h4">
        Recipes
      </v-card-title>
      <v-card-text>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
        <v-table-component :recipes="recipes" />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Recipe } from "./viewModel";
import { VTableComponent, SearchBarComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, VTableComponent, SearchBarComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
  },
});
</script>
