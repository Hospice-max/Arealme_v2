import { createRouter, createWebHistory } from 'vue-router'
import AcceuilPage from "@/views/AcceuilPage.vue";
import AbilityPage from '@/views/AbilityPage.vue';
import ErrorPage from "@/components/ErrorPage.vue";
import scoreComponent from "@/components/ScoreComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'acceuil',
      component: AcceuilPage
    },
    {
      path: "/AbilityPage",
      name: 'AbilityPage',
      component: AbilityPage
    },

   {
    path :"/",
    name : 'acceuil' ,
    component : AcceuilPage
    },
    {
      path :"/reactivityTest/:id",
      name : 'Ability' ,
      component : AbilityPage, 
      props: true
    },
    {path :"/error",
    name : 'Error' ,
    component : ErrorPage
    },

    {
      path :"/score",
      name : 'Score' ,
      component : scoreComponent
    },
    ]
})



export default router
