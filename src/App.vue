<script setup>
</script>

<template>
    <div class="container">
        <h1 class="blink">
            Tap anywhere to start
        </h1>
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





h1.blink {
    animation: blink 1s infinite;
    /* Change 1s to adjust blinking speed */

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
    background: linear-gradient(-45deg, #2e4b6e, #395799, #3c597a);
    background-size: 400% 400%;
    color: #fff;
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande", "Lucida Sans Unicode", Arial, Verdana, sans-serif
}

</style>