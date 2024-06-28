import { createRouter, createWebHistory } from "vue-router";
import AcceuilComponent from "@/components/PagePrincipale.vue";
import timeComponent from "@/components/timeComponent.vue";
import StartPage from "@/views/StartPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Acceuil",
      component: AcceuilComponent,
      children:{
        path: "/",
        name: "Acceuil",
        component: timeComponent,
      }
    },
    {
      path :"/StartPage",
      name : 'StartPage' ,
      component : StartPage, 
    },
    {
      path :"/Test/:id",
      name : 'StartPage' ,
      component : StartPage, 
    },

  ],
});

export default router;
