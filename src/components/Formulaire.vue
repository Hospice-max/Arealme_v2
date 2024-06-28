
<template>
    <div class="body">
      <div class="div">
        <form @submit.prevent="handleSubmit">
          <span
            >Bravo! Vous êtes classé n°1! Veuillez entrer votre nom:</span
          ><br />
          <input type="text" v-model="inputValue" />
          <div class="button">
            <button class="btn1">Confirmer</button>
          <RouterLink class="btn2" to="/">Annuler</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </template>
<script setup>
import { ref } from "vue";
</script>

<style scoped>

body {
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

.div {
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  background-color: cornsilk;
  padding: 30px;
  border-radius: 10px;
  width: 30%;
margin: 0 auto;
justify-content: center;

/* align-content: center; */
/* margin-top: auto;
margin-bottom: auto;
margin-left: auto;
margin-right: auto;*/

}

input {
  max-width: 100%;
  width: 100%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-top: 8px;
}

.button {
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
}
/* .container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
};

.div{
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 5px;
  width: 30%;
};
input {
border: 1px solid blueviolet;
  padding: 10px;
  max-width: 100px;
  width: 100px;
  height: 10px;
  border-radius: 5px;
  margin-top: 8px;
};

.butt{
    margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 3%;
  padding: 9px;
};
#btn1 {
  background-color: rgb(13, 110, 253);
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
};
#btn2 {
    background-color: #fff;
    color: rgb(13, 110, 253);
  border-radius: 1px solid blue;
  padding: 10px;
  border: 1px solid rgb(13, 110, 253);
  border-radius: 5px;
  text-decoration: none;
}; */


</style>
