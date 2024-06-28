<template>
  <!-- <div v-if="data.tentative !== 1"> -->
  <div v-if="true" style="width: 500px">
    <canvas ref="graph"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  durations: Array,
});

const ids = ref([]);

const graph = ref(null);

const abscisse = [1, 2, 3]; // tentatives (ils doivent être dynamiques)
const data = [500, 420, 800]; // temps mis pour chaque tentative
for (let key in props.durations) {
  ids.value.push(parseInt(key) + 1);
}
onMounted(() => {
  if (graph.value) {
    const ctx = graph.value.getContext("2d");

    const dataCanvas = {
      labels: ids.value,
      datasets: [
        {
         
          label: "Progression du test en cours",
          data: props.durations,
          fill: false,
          borderColor: "white",
          pointBorderColor: "#7CFC00",
          backgroundColor: "#D3D3D3",
          tension: 0.1,
        },
      ],
    };

    const miseEnForme = {
      scales: {
        x: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white", // Change la couleur de la grille de l'axe x
          },
        },
        y: {
          ticks: {
            color: "white",
          },
          grid: {
            color: "white", // Change la couleur de la grille de l'axe x
          },
        },
      },
      plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(246, 242, 242)'
                }
            }
        },
        
    };
    const config = new Chart(ctx, {
      type: "line",
      data: dataCanvas,
      options: miseEnForme,
      
    });
    
  }
});
function addItems() {
  for (let i in [1, 2, 3]) {
    abscisse.value.push(Number(i));
  }
}
</script>

<style scoped>

</style>