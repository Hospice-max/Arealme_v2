<script setup>
import { ref, onMounted } from "vue";
import GamePage from "@/components/GamePage.vue";

const showCircle = ref(true);

</script>

<template>
<!-- Page de lancement du jeu -->
  <div :class="{ isMonted: showCircle }" class="container" @click="showCircle = false">
    <p id="message" v-if="showCircle">Tap anywhere to start...😉</p>
    <GamePage :countAttmpts="countAttmpts"  v-else></GamePage>
  </div>
</template>

<style scoped>

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
  background-color: rgb(23, 3, 102);
}

.isMonted {
  cursor: pointer;
}

</style>
