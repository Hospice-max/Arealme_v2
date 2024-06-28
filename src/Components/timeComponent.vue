<template>
  <span class="btn2">{{ z + 0 }}: {{ a }}: {{ y }}</span>
</template>

<script setup>
import { ref } from "vue";

let now = new Date();
let heure = ref(new Date().getSeconds());
let y = ref(0);
let z = ref(0);
let a = ref(0);

function name() {
  y.value = new Date().getSeconds();
  a.value = new Date().getMinutes();
  z.value = new Date().getHours();
  if (y.value < 10) {
    y.value = "0" + y.value;
  }
  if (a.value < 10) {
    a.value = "0" + a.value;
  }
  return y.value, a.value, z.value;
}

setInterval(name, 1000);
</script>

<style scoped>
.btn2 {
  text-align: center;
  margin: auto;
  border: none;
  border: 1px solid #a1b9cf;
  border-radius: 20px;
  padding: 5px;
  background-color: #9b989881;
  display: inline-block;
}
</style>