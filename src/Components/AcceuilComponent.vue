<template>
  <div>
    <nav>
      <div class="container">
        <router-link to="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="54px"
            fill="#5f6368"
          >
            <path
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            /></svg
        ></router-link>
        <router-link to="/" class="zone">
          <span class="zone">ZONE</span>
          <span class="moi">MOI </span>
        </router-link>
        <router-link to="/" class="abilité">Test d'aptitude</router-link>
      </div>
    </nav>
    <div class="container2">
      <h1>
        Test de temps de réaction | Rapports statistiques + vidéo des records du
        monde
      </h1>
      <div class="container-button">
        <p>Tentatives:</p>
        <button class="btn">3</button>
        <button class="btn">5</button>
        <button class="btn">10</button>
        <button class="btn">15</button>
        <button class="btn">20</button>
        <button class="btn">💪30</button>
        <button class="btn">😂100</button>
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
      <button class="start">Commencer</button>
      <p class="par">Défi des joueurs professionnels</p>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
nav {
  box-sizing: border-box;
  position: relative;
  background: rgba(229, 229, 229);
  padding: 8px;
  margin-bottom: -2rem;
}
.container {
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
  margin-left: 10px;
}
.abilité {
  text-decoration: none;
  color: #9b9898;
  margin-left: 60px;
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.start {
  margin-left: 500px;
  background-color: #0078e7;
  padding: 15px;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  font-size: 18px;
}
.container2 h1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
}
.container-button {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 20px;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  opacity: 0.4;
}
.container-button p{
  background-color: rgba(255, 0, 0, 0.555);
  font-size: 25px;
}
.btn:hover{
background-color: #0078e7;
font-size: 20px;
}
button {
  background-color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
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
}
.timer {
  position: absolute;
  display: flex;
  align-items: flex-end;
  margin-left: 103%;
}
.start:hover {
  background-color: #0078e7;
  font-size: 22px;
}
</style>