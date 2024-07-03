import { createRouter, createWebHistory } from 'vue-router'
import AcceuilPage from "@/views/PagePrincipale.vue";
import StartPage from '@/views/StartPage.vue';
import scoreComponent from "@/components/Scores.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'acceuil',
      component: AcceuilPage
    },
    {
      path: "/StartPage",
      name: 'StartPage',
      component: StartPage
    },

   {
    path :"/",
    name : 'acceuil' ,
    component : AcceuilPage
    },
    {
      path :"/reactivityTest/:id",
      name : 'Start' ,
      component : StartPage, 
      props: true
    },
    {
      path :"/score",
      name : 'Score' ,
      component : scoreComponent
    },
    ]
})



export default router
