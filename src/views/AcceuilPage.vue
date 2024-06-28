<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()


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

</script>

<template>
    <div>
        <nav>
                <div class="myNav">
                    <!-- les différents liens de la barre de navigation -->
                    <RouterLink class="menu" to="error"><img src="/src/assets/Menu.png" alt="Menu"></RouterLink>
                    
                    <RouterLink class="areal" to="error">
                    <span class="zone">ZONE</span>
                    <span class="moi">MOI</span>
                    </RouterLink>
                    <span><img src="/src/assets/Chevron.png" alt="chevron"></span>

                    <RouterLink class="test" to="error">Test d'aptitude</RouterLink>

                    <RouterLink class="timer" to="error"><img src="/src/assets/Timer.png" alt="Timer"></RouterLink>
                </div>
        </nav>
        
        <div class="div">
            <article>
                <h1>Test de temps de réaction | Rapports statistiques + vidéo des records du monde</h1>
                <div>
                    <ul>
                        <span>Attempts:</span>
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

                <div>
                    <!-- Textes de la page d'acceuil -->
                    <p>Si vous vous êtes déjà demandé si votre cerveau était capable de traiter rapidement des informations
                        visuelles ou non, ce quiz simple est fait pour vous ! La règle est très simple : lorsque  le
                        cercle <span class="red">rouge</span> tourne au <span class="green">vert</span>, appuyez/cliquez sur le bouton gauche de la souris sur l'écran aussi vite que possible
                        !
                    </p>
                    <p>Le temps de réaction moyen à un stimulus visuel est d'environ 250 ms (millisecondes) et la plupart des
                        gens peuvent atteindre jusqu'à 200 ms avec un peu d'entraînement. Le temps de réaction documenté le plus
                        rapide à un stimulus visuel est de 120 millisecondes, ce qui constitue un record extrêmement difficile à
                        battre. Si vous pensez avoir ce qu'il faut pour faire mieux, n'hésitez pas à télécharger une vidéo de
                        vous en train de faire ce test sur Youtube et à nous envoyer le lien. Vous pouvez repasser ce test
                        autant de fois que vous le souhaitez sans aucun impact sur votre score final !
                    </p>
                </div>
                <div class="end">
                    <!-- Redirection du boutton commencer ver la page du jeu -->
                    <RouterLink 
                    class="start" 
                    :to="{name: 'Ability', params: {id:taked}}">Commencer
                    </RouterLink>
                   
                </div>
                <p class="par">Défi des joueurs professionnels</p>
            </article>
        </div>
    </div>
</template>


<style scoped>
    .div{
        position: relative;
        top: 8px;
        border: 1px ridge rgba(239, 233, 233, 0.851);
        border-radius: 2%;
        padding: 20px;
        max-width: 100%;
        width: 60%;
        margin-top: 3%;
        margin-left: 20%;
        background-color: rgb(247, 247, 247);
        font-family: "Helvetica Neue", Helvetica, "Lucida Grande", "Lucida Sans Unicode", Arial, Verdana, sans-serif;;
    }
    nav {
        box-sizing: border-box;
        position: relative;
        background: rgba(229, 229, 229);
        padding: 8px;
        margin-bottom: -2rem;
        
    }
    .myNav{
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5%;
        max-width: 100%;
        width: 60%;
        margin-left: 20%;
        font-family: sans-serif, system-ui;
        font-size: 15px;
    }
   
    img{
        display: flex;
        justify-content: center;
        height: 1.4rem;
        background-color: inherit;
        color: rgba(229, 229, 229);;
        background: rgba(229, 229, 229);
        box-sizing: border-box;
        
    }
    .areal{
        font-weight: bold;
        text-decoration: none;
        display: flex;
        gap: 2%;
    }
    .areal:hover{
        background-color: rgba(216, 208, 208, 0.913);
        padding: 4px;
    }
    .zone{
        color: black;
    }
    .moi{
        color: orangered;
    }
    .test{
        text-decoration: none;
        color: gray;    
        font-weight: bold;
    }
    .test:hover{
        background-color: rgba(216, 208, 208, 0.913);
        color: orangered;
        padding: 4px;
    }
    .menu:hover{
        background-color: rgba(216, 208, 208, 0.913);
        padding: 4px;
    }
    .timer{
        position:absolute;
        display: flex;
        align-items: flex-end;
        margin-left: 103%;

    }
    .timer:hover{
        background-color: rgba(216, 208, 208, 0.913);
        padding: 4px;
    }
   
    h1{
        position: absolute;
        top: 0;
        left: 0;
        right: 0 ;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        text-align: center;
        margin-top: 0px;
        background-color: rgba(24, 128, 56) ;
        color: rgb(238, 255, 238);
        justify-content: center;
        font-size: 20px;
        padding: 8px;
    }
    ul {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 2%;
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
        background-color: rgb(13, 110, 253);
        opacity: 1;
        color: white;
    }
    button{
       border: none; 
       background-color: rgba(229, 229, 229); 
    }

    p{
        font-size: 18px;
        opacity: 0.8;
    }
    .red{
        background-color: red;
        color: white;
        font-weight: bold;
        padding: 3px;
    }
    .green{
        background-color: green;
        color: white;
        font-weight: bold;
        padding: 3px;
    }
    .start{
        background-color: rgb(13, 110, 253);
        color: white;
        padding: 15px;
        border: none;
        border-radius: 4px;
        text-decoration: none;
        max-width: 100%;
        font-size: 18px;
    }
    .start:hover{
        background-color: rgb(10, 10, 167);
        font-size: 22px;
    }
    .end{
        text-align: center;
        padding: 15px;
    }
   .par{
    text-align: center;
   }
</style>