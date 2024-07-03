<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
// const data = ref([{ Rank: "0", Name: "GFB", Reaction: "GH", Date: "GH" }]);

const props = defineProps({
  data: Array,
});
</script>

<template>
  <div>
    <h2>Reaction Time Test Highscores</h2>
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Reaction Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(el, i) in data" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ el.gamerName }}</td>
            <td>{{ el.moy }}</td>
            <td>{{ el.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 5px;
  border: 3px solid rgb(2, 102, 82);
}

th {
  background-color: rgba(4, 54, 85, 0.783);
}
</style>
