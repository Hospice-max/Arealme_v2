<script setup>
import AcceuilComponent from "@/views/AcceuilPage.vue";
import TableauScore from "@/components/TableauScore.vue";
</script>

<template>
<div>
  <RouterLink to="/"></RouterLink>
  <RouterView/>
</div>
  <TableauScore />
</template>

