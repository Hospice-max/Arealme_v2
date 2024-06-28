<script setup>
import { ref, onMounted } from "vue";
import GamePage from "@/components/GamePage.vue"

const showCircle = ref(true);
</script>

<template>
    <div :class="{ isMonted: showCircle }" @click="showCircle = false" class="container">
        <p v-if="showCircle" class="blink">
            Tap anywhere to start ...😉
        </p>
        <GamePage :countAttmpts="countAttmpts" v-else></GamePage>
    </div>
</template>


<style scoped>
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

.blink {
    animation: blink 1s infinite;
}
p{
  color: white;
  font-size: 30px;
  font-weight: bold;
}
.container {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #096ae0, #0e58f7, #13529b);
    background-size: 400% 400%;
    color: #fff;
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande", "Lucida Sans Unicode", Arial, Verdana, sans-serif
}
.isMonted {
  cursor: pointer;
}
</style>