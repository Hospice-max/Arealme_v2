<!-- MoyTab.vue -->
<script setup >
import { ref } from 'vue';

// Déclaration de la variable TABDATA qui contient l'objet qui récupère les données
let tabData = ref([{
    Tour:ref (""),
    Nom:ref (""),
    ReacTime:ref (""),
    Date:ref (""),
    SeeMore:ref ("")
}])

</script>

<template>
<!-- Une DIV container qui contient tout le code -->
<div class="container">
<table>
    <thead>
        <tr class="tableTitle">
            <th>Tour</th>
            <th>Nom</th>
            <th>Temps de Réaction</th>
            <th>Date</th>
            <th>Voir plus</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in tabData" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.average }}</td>
        <td>
          <!-- Utilisation du composant SVG pour "Voir plus" -->
          <PlusIcon @show-details="showDetails(index)" />
        </td>
        <td><icon-base icon-name="write"><icon-write /></icon-base>
        </td>
      </tr>
    </tbody>
</table>
</div>
</template>

<style scoped>
table, th, td{
    border: 1px solid black;
    border-collapse: collapse;
}
.tableTitle{
    background-color: #f5f5f5;
    color: #000;
}
</style>