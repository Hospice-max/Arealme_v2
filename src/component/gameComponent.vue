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

    <div class="circle" id="app">
       
        {{ count }}
    </div>


</template>


<style scoped>
.circle {

    border: 12px solid white;
    border-radius: 100%;
    background-color: rgb(98, 99, 182);
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

.circle {
    background: linear-gradient(-45deg, #2e4b6e, #395799, #3c597a);
  
}
</style>