<script setup>
import { ref } from 'vue'

const showCircle = ref(true)
const count = ref(1)

function incrementCount() {
  if (count.value < 3) {
    count.value++
  } else {
    showCircle.value = false
  }
}
</script>

<template>
  <div class="container" @click="incrementCount">
    <p id="message" v-if="showCircle">Cliquez n'importe où pour démarrer</p>
    <div class="test_circle" v-else>
      <p id="count">{{ count }}</p>
    </div>
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.test_circle {
  width: 300px;
  height: 300px;
  background-color: red;
  border-radius: 50%;
  border: 1px solid red;
  transition: background-color 0.5s; /* ajout d'un effet de transition */
}

.test_circle:not(.showCircle) {
  background-color: green; /* changement de couleur en vert lorsque showCircle est faux */
}
</style>