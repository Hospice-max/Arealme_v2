<script setup>
import { ref, onUpdated, onMounted } from "vue";

const count = ref(3); //Initialisation du compteur à 3 pour stocker la valeur du compte à rebours.

const starCountDown = () => { //création d'une fonction qui utilise 'setinterval' pour décrémenter la valeur du compte à rebours toutes les secondes ('100ms').
    const intervalI = setInterval(() => {
        if (count.value > 1) {
            count.value--
        } else {
            clearInterval(intervalId);

        }
    }, 1000);
    onMounted(() => { // IL assure que l'intervalle est nettoyé lorsque le composant est démonté, évitant ainsi des fuites de mémoire.
        clearInterval(intervalI)
    });
};

onMounted(() => { //  il execute la fonction starCountDown lorsque le composant est monté
    starCountDown()
});

</script>


<template>

    <div class="container">
    <div class="durée">490.98 MS</div>
    <div class="circle" id="app">

        {{ count }}
    </div>

    <div class="examen">
        EVALUATING...
        0/0
    </div>
</div>

</template>


<style scoped>
.circle {

    border: 12px solid white;
    border-radius: 100%;
    width: 400px;
    height: 400px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200px;
    font-weight: bolder;
    color: #fff;
    

}


.durée {
    color: #fff;
    position: absolute;
    top: 20%;
    left: 49%;
    transform: translate(-50%, -50%);
    height: 2px;
    font-size: 40px;
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande", "Lucida Sans Unicode", Arial, Verdana, sans-serif
}

.examen {
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%, -50%);
    height: 2px;
    font-size: 40px;
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande", "Lucida Sans Unicode", Arial, Verdana, sans-serif
}

.container{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #2e4b6e, #395799, #3c597a);
}

</style>