<template>
  <div :class="$style.objetfit">
  <img :src="imageUrl">
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "IngredientImageComponent",
  props: {
    imageUrl:  { required: true } as PropOptions<string>,
  },
});
</script>

<style module>
.objetfit > img{
	width: 100%;
	height: 200px;
	object-fit: none;
	background-color: rgb(238, 236, 236) ;
}
</style>