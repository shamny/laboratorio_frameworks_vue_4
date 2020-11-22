<template>
  <v-form>
    <ingredient-image-component :imageUrl="recipe.image"/>

    <v-text-field
      filled
      label="Name"
      :value="recipe.name"
      :rules="[resultNameRecipeError]"
      @input="(name) => onUpdateRecipe('name', name)"
      @click:append="onAddIngredient(ingredient)"
    />
 
    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      :rules="[resultIngredientsRecipeError]"
      @click:append="onAddIngredient(ingredient)"
    />

    <ingredient-list-component :ingredients="recipe.ingredients" :on-remove-ingredient="onRemoveIngredient" />
    
    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :rules="[resultDescriptionRecipeError]"
      :value="recipe.description"
      :no-resize="true"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>
      <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import IngredientListComponent from "./IngredientList.vue";
import IngredientImageComponent from "./IngredientImage.vue"
import { FormProps } from "../formProps";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientListComponent, IngredientImageComponent }, 
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: "",
    };
  },
  computed: {
    resultNameRecipeError(): boolean | string {
      return this.recipeError.name.succeeded || this.recipeError.name.message;
    },
     resultDescriptionRecipeError(): boolean | string {
      return this.recipeError.description.succeeded || this.recipeError.description.message;
    },
     resultIngredientsRecipeError(): boolean | string {
      return this.recipeError.ingredients.succeeded || this.recipeError.ingredients.message;
    },
  },
 });
</script>
