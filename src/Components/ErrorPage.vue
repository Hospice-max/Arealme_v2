<script setup>
import { ref } from "vue";
</script>

<template>
<div class="Warning">
    <div class="container">
        <!-- Message d'erreur -->
        <span><img src="/src/assets/Warning.png" alt="warning"></span>
        <p>This page is not available !!!</p>
    </div>
</div>
</template>

<style scoped>
    .Warning{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(226, 224, 224, 0.809);
    }
    img{
        height: 10rem;
        
    }
    .container{
        text-align: center;
        font-size: 30px;
    }
    p{
        margin-top: 5px;
        text-align: center;
    }
</style>