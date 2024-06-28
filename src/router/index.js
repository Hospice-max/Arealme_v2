import { createRouter, createWebHistory } from 'vue-router'
import AcceuilPage from "@/views/PagePrincipale.vue";
import StartPage from '@/views/StartPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'acceuil',
      component: AcceuilPage
    },
    {
      path :"/reactivityTest/:id",
      name : 'Start' ,
      component : StartPage, 
    },
    ]
})



export default router
