<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import Chrono from "@/components/Chrono.vue";

const props = defineProps({
  countAttmpts: Number,
});

let time = Math.floor(Math.random() * 3000);
const isRed = ref(true);
let startTime = ref(0);
let endTime = ref(0);
let badClick = ref(0);
let survey = ref(true);
let diffTime = ref(0);
let gameTab = ref([]);
let idValue = ref(1);
const childrenProps = ref({
  id: "",
  green: [],
  atTaked: props.countAttmpts,
});
let change = ref(true);
let newTemp = props.countAttmpts;

const gameData = ref({});
const isScoreVisible = ref(false);

const method = (param) => {
  if (idValue.value <= newTemp) {
    change.value = param;
    startGame();
  }
};
// Réinitialisation après le décompte
let reboot = () => {
  isRed.value = true;
  endTime.value = 0;
  diffTime.value = 0;
  startGame.value = 0;
  badClick.value = 0;
};
/* Fonction de récupération des statistiques du joueur sur le nombre et le temps de click sur le rouge et le vert*/
function clickReact() {
  if (isRed.value === true) {
    badClick.value++;
  } else {
    endTime.value = performance.now();

    diffTime.value = (endTime.value - startTime.value).toFixed(2);

    gameTab.value.push({
      id: idValue.value,
      green: diffTime.value,
      red: badClick.value,
    });

    childrenProps.value.id = idValue.value;
    childrenProps.value.green.push(Math.floor(diffTime.value));
    idValue.value++;
    change.value = false;

    reboot();
  }
}
// Lancement du jeu et définition du temps d'attente entre le rouge et le vert
const startGame = () => {
  time = Math.floor(Math.random() * 3000);

  const timeoutId = setTimeout(() => {
    isRed.value = false;
    startTime.value = performance.now();
    if (idValue.value > newTemp) {
      clearTimeout(timeoutId);
    }
  }, time);
};

const atGameEnd = (data) => {
  isScoreVisible.value = true;
  gameData.value = data;
  saveDatas();
};

function saveDatas() {
  if (!localStorage.getItem("gamesData")) {
    const localDatas = [];
    localDatas.push(gameData.value);
    localStorage.setItem("gamesData", JSON.stringify(localDatas));
  } else {
    const localDatas = JSON.parse(localStorage.getItem("gamesData"));
    localDatas.push(gameData.value);
    localStorage.setItem("gamesData", JSON.stringify(localDatas));
  }
}

function getDatas() {
  return JSON.parse(localStorage.getItem("gamesData")) ?? [];
}

watch(() => survey.value, clickReact);

onMounted(() => {
  startGame();
});
</script>

<template>
  <div v-if="isScoreVisible">
    <ScoreComponent :data="childrenProps" :tableDatas="getDatas()" />
  </div>
  <div v-else class="textContainer">
    <div v-if="change === true">
      <p v-if="isRed">ATTENDEZ LE VERT🔥 <span class="blink">...</span></p>
      <p v-else>CLICKEZ 🏃‍♂️!!!</p>
      <div
        class="test_circle"
        :class="{ red: isRed, green: !isRed }"
        @click="survey = !survey"
      ></div>
    </div>

    <Chrono
      v-else-if="change === false"
      :childrenProps="childrenProps"
      :currentTentative="idValue"
      :gameRoundsData="gameTab"
      @response="method"
      @emitGameData="atGameEnd" 
    /> <!-- Récupération du émit émit par (Chrono.vue) pour la moyenne du joueur -->
    
  </div>
</template>

<style scoped>
.test_circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.red {
  background-color: rgb(173, 17, 17);
  border: 12px solid rgb(241, 231, 234);
  cursor: pointer;
}

.green {
  background-color: #06fb63;
  border: 12px solid rgb(241, 231, 234);
  cursor: pointer;
}

.textContainer {
  text-align: center;
}

.blink {
  animation: blink 1s infinite;
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

p {
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 25px;
}
</style>
