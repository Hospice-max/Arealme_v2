<script setup>
const props=defineProps({
    lesStars:Number
} )




</script>
<template>

  <div class="starse"> 
    <div v-if="props.lesStars==1">
 <svg xmlns="http://www.w3.org/2000/svg" height="65" viewBox="0 -960 960 960" width="65px" fill="#fff"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
</div>
<div v-else-if="props.lesStars==2"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="65" viewBox="0 -960 960 960" width="65" fill="#fff"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>


    <svg xmlns="http://www.w3.org/2000/svg" height="65" viewBox="0 -960 960 960" width="65" fill="#fff"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg></div>




<div v-else-if="props.lesStars==3"> 


    <svg xmlns="http://www.w3.org/2000/svg" height="65" viewBox="0 -960 960 960" width="65" fill="#fff"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>


<svg xmlns="http://www.w3.org/2000/svg" height="65" viewBox="0 -960 960 960" width="65" fill="#fff"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>

<svg xmlns="http://www.w3.org/2000/svg" height="65" viewBox="0 -960 960 960" width="65" fill="#fff"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg></div>



</div> 
</template>
<style scoped>
.starse{
color: with
;
}

</style>