<script setup>

import AcceuilComponent from "@/views/PagePrincipale.vue";
import TableauScore from "@/components/TableauScore.vue";
</script>

<template>
<div>
  <RouterLink to="/"></RouterLink>
  <RouterView/>
</div>
  <TableauScore />
</template>

