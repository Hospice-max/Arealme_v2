<script setup>
import { ref } from "vue";
import starsComponentsVue from "@/components/starsComponents.vue";
const valeurInit=ref(1000);
const score=ref(500)
const Average=ref("")
const titleClass = ref('title')
const titleClas = ref('titl')
const titleCla = ref('tit')

const categorie={
    rapide:{text:"Hight",limit:300,},
    Moyen:{ text:"Moyen",limit:400},
    faible:{ text:"Lent",limit:500}};
    const etoile=ref('')
    const starNumb={
        rapide:{star:3},
        Moyen:{star:2},
        lent:{star:1}
    }

    if (score.value<=categorie.rapide.limit) {
    Average.value=categorie.rapide.text
    etoile.value=starNumb.rapide.star
    

} else if (score.value>=categorie.Moyen.limit && score.value<=categorie.faible.limit) {
    Average.value=categorie.Moyen.text
    etoile.value=starNumb.Moyen.star
    

} else if (score.value>categorie.faible.limit) {
    
    Average.value=categorie.faible.text
    etoile.value=starNumb.lent.star
}   



const deComptId=setInterval(()=>{
if (valeurInit.value> score.value) {
     valeurInit.value--
    }else{
    clearInterval(deComptId)
};
},10);
</script>

<template>
  <div v-if="etoile==1" :class="titleClass">
    <div class="lesSpan"><span>Your </span><span class="diff">Average Reaction Time</span><span>is</span></div>
    <div  class=" time"><span>{{valeurInit}}</span><span class="small" >ms</span> </div>
    <div class="Score">{{Average}}</div>
    <starsComponentsVue  class="star" :lesStars="etoile"/>
    <div class="star">{{etoile}}</div>
   
    
  </div>
  <div v-else if="etoile==2" :class="titleClas">
    <div class="lesSpan"><span>Your </span><span class="diff">Average Reaction Time</span><span>is</span></div>
    <div  class=" time"><span>{{valeurInit}}</span><span class="small" >ms</span> </div>
    <div class="Score">{{Average}}</div>
    <starsComponentsVue  class="star" :lesStars="etoile"/>
    <!-- <div class="star">{{etoile}}</div> -->
    
  </div>
</template>

<style scoped>


@keyframes moyenColor {
    from{ background-color: blue;}
    to{background-color:aqua ;}
    
}
@keyframes hightColor {
    from{ background-color: blue;}
    to{background-color:red;}
}
@keyframes low {
    from{ background-color: yellow;}
    to{background-color:#545FFF;}}


.title{
    color: white;
    background-color: blue;
    animation-name:moyenColor ;
    animation-duration: 6000ms;
    /* animation-delay: infinity; */
}
.titl{
    color: white;
    background-color: blue;
    animation-name:hightColor ;
    animation-duration: 6000ms;
}
.tit{
    background-color:maroon;
    animation-name:low ;
    animation-duration: 6000ms;
}


.lesSpan{
    display: flex;
    /* border: 1px solid black; */
    justify-content: center;
    gap: 10px;
    padding-top: 20px;

}
.diff{
    font-weight: bold;
}
.time{
     display: flex;
     justify-content: center;
     padding: 20px;
     margin-top: 40px;
     font-size: 80px;
     /* border: 1px solid blueviolet; */
}
.small{
    font-size: 20px;
    margin-top: 50px;


}
.Score{
    /* border: 1px solid maroon; */
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 30px;
}
.star{
  display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 30px;
   
}


</style>





