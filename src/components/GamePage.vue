<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import Chrono from "@/components/Chrono.vue";

const props = defineProps({
  countAttmpts: Number,
});

let time = Math.floor(Math.random() * 3000);
const isRed = ref(true);
let gameStart = ref(0);
let gameEnd = ref(0);
let badClick = ref(0);
let task = ref(true);
let diffTime = ref(0);
let gameTable = ref([]);
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
  gameEnd.value = 0;
  diffTime.value = 0;
  startGame.value = 0;
  badClick.value = 0;
};
/* Fonction de récupération des statistiques du joueur sur le nombre et le temps de click sur le rouge et le vert*/
function clickReact() {
  if (isRed.value === true) {
    badClick.value++;
  } else {
    gameEnd.value = performance.now();

    diffTime.value = (gameEnd.value - gameStart.value).toFixed(2);

    gameTable.value.push({
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
    gameStart.value = performance.now();
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

watch(() => task.value, clickReact);

onMounted(() => {
  startGame();
});
</script>


<template>
    <div class="conteneur">
        <div v-if="change === true">
            <p class="signal" v-if="isRed">ATTENDEZ LE VERT 😊<span class="blink">...</span></p>
            <p class="signal" v-else>CLICKEZ  🔥!!! 🏃‍♂️ </p>
            <p class="cercle" 
            :class="{ red: isRed, green: !isRed }"
            @click="task = !task">⏳</p>
        </div>
    </div>
</template>

<style scoped>
.conteneur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(44, 6, 79, 0.923);
    background-size: 400% 400%;

}

.cercle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid white;
    text-align: center;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    background-color: rgba(246, 4, 52, 0.861);
}
.red {
  background-color:rgba(246, 4, 52, 0.861);
  border: 12px solid white;
  cursor: pointer;
}

.green {
  background-color: #0cf264;
  border: 12px solid white;
  cursor: pointer;
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
.signal {
  color: white;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: -2rem;
}
</style>