<template>
    <div :class="react">
        <nav>
            <div class="container">
                <router-link to="#"><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960"
                        width="54px" fill="#5f6368">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg></router-link>
                <router-link to="/" class="zone">
                    <span class="zone">ZONE</span>
                    <span class="moi">MOI </span>
                </router-link>
                <router-link to="/" class="abilité">Test d'aptitude</router-link>
                <time-component />
                <button class="btn3" @click="startAnimation()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="30px"
                        fill="#5f6368">
                        <path
                            d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30ZM516-170q117-14 196.5-101.72T792-480q0-120.56-79.5-208.28T516-790v620Z" />
                    </svg>
                </button>
            </div>
        </nav>
        <div class="container2">
            <h1>
                Test de temps de réaction | Rapports statistiques + vidéo des records du
                monde
            </h1>
            <div>
                 <ul>
                        <span>Tentatives:</span>
                        <!-- Parcours du tableau des chiffres et initialisation de l'action qu'effectuera l'évènement @click -->
                        <li  v-for="(dig, index) in number" :key="index">
                            <button  
                                    class="list" 
                                    @click="taked=dig.value"
                                    :class="{backgroundColor: taked == dig.value}">
                                    {{ dig.digit }}
                            </button>
                        </li>
                    </ul>
            </div>
            <p class="paragraphe">
                Si vous vous êtes déjà demandé si votre cerveau était capable de traiter
                rapidement des informations visuelles ou non, ce quiz simple est fait
                pour vous ! La règle est très simple : lorsque le cercle
                <span class="red">rouge</span> devient <span class="green">vert</span>,
                appuyez/cliquez sur le bouton gauche de la souris sur l'écran le plus
                vite possible !
            </p>
            <p class="paragraphe">
                Le temps de réaction moyen à un stimulus visuel est d'environ 250 ms
                (millisecondes) et la plupart des gens peuvent atteindre jusqu'à 200 ms
                avec un peu d'entraînement. Le temps de réaction documenté le plus
                rapide à un stimulus visuel est de 120 millisecondes, ce qui constitue
                un record extrêmement difficile à battre. Si vous pensez avoir ce qu'il
                faut pour faire mieux, n'hésitez pas à télécharger une vidéo de vous en
                train de faire ce test sur Youtube et à nous envoyer le lien. Vous
                pouvez repasser ce test autant de fois que vous le souhaitez sans aucun
                impact sur votre score final !
            </p>
            <p>
                <RouterLink class="start" :to="{name: 'Start', params: {id:taked}}">Commencer
                </RouterLink>
            </p>
    
            <p class="par">Défi des joueurs professionnels</p>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref } from "vue";
import timeComponent from "@/components/timeComponent.vue";
let react = ref("");

const number = [
    {digit:'3', value:3},
    {digit:'5', value:5},
    {digit:'10', value:10},
    {digit:'15', value:15},
    {digit:'20', value:20},
    {digit:'💪30', value:30},
    {digit:'😂100', value:100},
    ]
const taked = ref(3);


function startAnimation() {
  // Réinitialisation de react.value à une nouvelle valeur pour chaque clic
  react.value = "high_container";

  // Utilisation de setTimeout pour déclencher l'animation
  setTimeout(function () {
    // Effectuer ici les étapes nécessaires pour l'animation
    react.value = "0";
    // Par exemple, vous pouvez ajouter ou modifier des classes CSS pour démarrer l'animation
    // document.getElementById("elementId").classList.add("animate-class");
  }, 1000); // Délai de 1000 millisecondes pour démarrer l'animation immédiatement
}
</script>

<style scoped>
.high_container {
    animation-name: animate;

    animation-duration: 2s;
    height: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
}

.btn3 {
    border: none;
    background-color: #9b989881;
    text-align: center;
    margin: auto;
}

nav {
    box-sizing: border-box;
    position: relative;
    background: rgba(229, 229, 229);
    padding: 8px;
    margin-bottom: -2rem;
}
  ul {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 3%;
        text-align: center;
        text-decoration: none;
        padding: 15px;
        margin-top: 1.8rem;
        margin-bottom: -1.rem;
        font-size: 18px;
        opacity: 0.8;
    }
    .list{
        background-color:white ;
        font-size: 15px;
        font-weight: bold;
        opacity: 0.4;
        cursor: pointer;
    }

    .list:hover {
        opacity: 1;
    }
    .backgroundColor {
        background-color: rgb(12, 102, 238);
        opacity: 1;
        color: white;
        padding: 7px;
    }
    button{
       border: none; 
       background-color: rgba(229, 229, 229); 
    }

.container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5%;
    max-width: 100%;
    width: 60%;
    margin: auto;
    font-family: sans-serif, system-ui;
    font-size: 15px;
}

.container svg {
    display: flex;
    justify-content: center;
    height: 1.4rem;
    background-color: inherit;
    color: rgba(229, 229, 229);
    background: rgba(229, 229, 229);
    box-sizing: border-box;
}

.zone {
    text-decoration: none;
    color: #3b3b3b;
    text-align: center;
    margin: auto;
}

.abilité {
    text-decoration: none;
    color: #9b9898;
    text-align: center;
    font-size: 18px;
    text-align: center;
    margin: auto;
    font-family: Georgia, "Times New Roman", Times, serif;
}

.start {
    background-color: #0078e7;
    padding: 15px;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    color: white;
    font-size: 18px;
    transition: 0.2s;
    text-decoration: none;
}

.container2 h1 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    margin-top: 0px;
    background-color: rgba(24, 128, 56);
    color: rgb(238, 255, 238);
    justify-content: center;
    font-size: 20px;
    padding: 8px;
}

.container2 {
    position: relative;
    top: 5px;
    border: 1px ridge rgba(239, 233, 233, 0.851);
    border-radius: 2%;
    padding: 35px;
    max-width: 100%;
    width: 60%;
    margin-top: 8%;
    margin-left: 19%;
    background-color: rgb(247, 247, 247);
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande",
        "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    box-sizing: border-box;
    text-align: center;
}
.par {
    text-align: center;
    padding: 15px;
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande",
        "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
}

.red {
    background-color: red;
    color: white;
    font-weight: bold;
    padding: 3px;
}

.green {
    background-color: green;
    color: white;
    font-weight: bold;
    padding: 3px;
}

.paragraphe {
    font-family: "Helvetica Neue", Helvetica, "Lucida Grande",
        "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
    text-align: justify;
}

.zone {
    color: black;
    font-size: 18px;
    font-family: Georgia, "Times New Roman", Times, serif;
}

.moi {
    color: orangered;
    font-size: 18px;
    font-family: Georgia, "Times New Roman", Times, serif;
    text-align: center;
    margin: auto;
}

.timer {
    position: absolute;
    display: flex;
    align-items: flex-end;
    margin-left: 103%;
}

.start:hover {
    background-color: #4f036d;
    font-size: 22px;
}

@keyframes animate {
    0% {
        background-color: red;
    }

    25% {
        background-color: yellow;
    }

    50% {
        background-color: blue;
    }

    100% {
        background-color: green;
    }
}
</style>
