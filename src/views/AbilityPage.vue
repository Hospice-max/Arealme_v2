<script setup>
import { ref, onMounted } from "vue";
import GameArray from "@/components/AbilityComponents/GameArray.vue";
import {  useRouter, useRoute } from "vue-router";

const showCircle = ref(true);
// un nombre de tentative non correspondant aux nombres initiaux renoiyant à la page d'acceuil
const route = useRoute()


const countAttmpts = parseInt(route.params.id)
const array = route.path.split("/")
const arrayEnd = array.pop()

const table = ['3', '5', '10', '15', '20', '30', '100']
const bool = table.includes(arrayEnd)
if(!bool) {
  router.push('/')
}
</script>

<template>
<!-- Page de lancement du jeu -->
  <div :class="{ isMonted: showCircle }" class="container" @click="showCircle = false">
    <p id="message" v-if="showCircle">Appuyez n'importe où pour commencer</p>
    <GameArray :countAttmpts="countAttmpts"  v-else></GameArray>
  </div>
</template>

<style scoped>
template {
  background-color: aqua;
}

#message {
  animation: blink 0.5s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

p{
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(58, 87, 139);
}

.isMonted {
  cursor: pointer;
}

</style>
