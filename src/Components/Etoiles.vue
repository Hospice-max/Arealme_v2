<script setup>
import FilledStarIcone from "@/components/icones/FilledStarIcone.vue";
import EmptyStarIcone from "@/components/icones/EmptyStarIcone.vue";

const props = defineProps({
  stars: Number,
});
</script>


<template>
<!-- Affichage des étoiles et des icones pour le résultat final du joueur -->
  <div class="etoile">
    <div v-if="props.stars === 1">
      <EmptyStarIcone />
    </div>

    <div v-else-if="props.stars === 2">
      <FilledStarIcone />
      <FilledStarIcone />
    </div>

    <div v-else>
      <FilledStarIcone />
      <FilledStarIcone />
      <FilledStarIcone />
    </div>
  </div>
</template>



<style scoped>
.etoile {
  text-align: center;
}
</style>