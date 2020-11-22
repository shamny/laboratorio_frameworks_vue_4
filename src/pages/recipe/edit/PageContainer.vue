<template>
  <div>
  <recipe-edit-page v-bind="{ recipe, recipeError, onUpdateRecipe, onAddIngredient, onSave, onRemoveIngredient }"/>
  <error-snack-bar v-bind="{ dataSnackBar , closeSnackBar, openSnackBar}"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeEditPage from "./Page.vue";
import { fetchRecipeById, save } from "../../../rest-api/api/recipe";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";
import { ErrorSnackBar } from "../../../common/snackbars";

export default Vue.extend({
  name: "RecipeEditPageContainer",
  components: { RecipeEditPage, ErrorSnackBar },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
       dataSnackBar:{ 
        errorText: "",
        isVisible:false},
      }
  },
  beforeMount() {
    const id = Number(this.id || 0);
    fetchRecipeById(id)
      .then((recipe) => {
        this.recipe = mapRecipeModelToVm(recipe);
      })
      .catch((error) =>{
              this.openSnackBar(error);
            });
  },
  methods: {
    onUpdateRecipe(field: string, value: string) {
    this.recipe = {
        ...this.recipe,
        [field]: value,
      };
      this.validateRecipeField(field, value);
    },
    onSave() {
      validations.validateForm(this.recipe).then((result) => {
        if (result.succeeded) {
          const recipe = mapRecipeVmToModel(this.recipe);
          save(recipe)
            .then((message) => {
              this.openSnackBar(message);
              this.$router.back();
            })
            .catch((error) =>{
              this.openSnackBar(error);
            });
        } else {
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };
          this.openSnackBar('Complete all inputs for save de recipe');
         }
      });
    },
    onAddIngredient(ingredient: string) {
      this.validateRecipeField("nameIngredient",ingredient);
      if (this.recipeError.nameIngredient.succeeded){
        this.recipe = {
          ...this.recipe,
          ingredients: [...this.recipe.ingredients, ingredient],
        };
      }
    },
    onRemoveIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: this.recipe.ingredients.filter((item) => item !== ingredient),
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    validateRecipeField(field, value) {
      validations.validateField(field, value).then((result) => this.updateRecipeError(field, result));
    },
    updateRecipeError(field, result) {
      this.recipeError = {
        ...this.recipeError,
        [field]: result,
      };
      if (!result.succeeded) {
          if (!this.recipeError.name.succeeded)
            this.openSnackBar(this.recipeError.name.message);
          if (!this.recipeError.description.succeeded)
            this.openSnackBar(this.recipeError.description.message);
          if (!this.recipeError.ingredients.succeeded)
            this.openSnackBar(this.recipeError.ingredients.message);
         if (!this.recipeError.nameIngredient.succeeded)
            this.openSnackBar(this.recipeError.nameIngredient.message);
      }
    },
   closeSnackBar(){
      this.dataSnackBar.isVisible=false;
      this.dataSnackBar.errorText ="";
    },
    openSnackBar(error:string){
      this.dataSnackBar.isVisible=true;
      this.dataSnackBar.errorText = error;
    }
  },
});
</script>
