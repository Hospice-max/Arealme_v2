
<template>
    <div class="container">
      <div class="formularDiv">
        <form @submit.prevent="handleSubmit">
          <span
            >Bravo! Vous êtes classé n°1! Veuillez entrer votre nom:</span
          ><br />
          <input type="text" placeholder="ici" maxlength="20" v-model="inputValue" />
          <div class="btnDiv">
            <button  id="btnCfm"   class="btn1">Confirmer</button>
          <RouterLink class="btn2" to="/">Annuler</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </template>
<script setup>
import { ref } from "vue";
// recupération des entrés de nom//
// let nom = ref()
// let name = false;

//ajout de l'évenement click
let boutton = document.getElementById('btnCfm');
function handleClick() {
alert('Formulaire rempli!');
}
boutton.addEventListener('click', handleClick);



  // if (name = true) {
  //   alert("Formulaire non rempli!!")
  // }
  // else{
  //   alert("Formulaire rempli!!")
  // }


function ctrlEntre(){
  if (inputValue.value.length > 20) {
    alert('Entrez juste le nom!')
}
};

</script>

<style scoped>

.container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.formularDiv {
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  background-color: cornsilk;
  padding: 30px;
  border-radius: 10px;
  width: 30%;
margin: 0 auto;
justify-content: center;

};

input {
  max-width: 100%;
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-top: 8px;
}

.btnDiv{
  margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 3%;
  padding: 8px;
}

.btn1 {
  background-color: rgb(13, 110, 253);
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.btn2 {
  background-color: white;
  color: rgb(13, 110, 253);
  padding: 10px;
  border: 1px solid rgb(13, 110, 253);
  border-radius: 4px;
  text-decoration: none;
};


</style>
