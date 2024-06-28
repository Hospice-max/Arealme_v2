<template>
  <span>
    {{z +0 }}:
  </span>
  <span>
    {{ a }}:
  </span>
  <span>
    {{y}}
  </span>
  
</template>

<script setup>
import { ref } from "vue";

let now = new Date();
let heure = ref(new Date( ).getSeconds());
let y = ref(0);
let z = ref(0);
let a = ref(0);

function name() {

   y.value = new Date().getSeconds();
   a.value=new Date().getMinutes();
   z.value=new Date().getHours();
   if(y.value<10){
    y.value="0"+y.value;
    a.value="0"+a.value;
   }
     return y.value ,a.value,z.value;
}

setInterval (name, 1000);


</script>

<style>
</style>