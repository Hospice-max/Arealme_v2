import { createRouter, createWebHistory } from "vue-router";
import AcceuilComponent from "../Components/AcceuilComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Acceuil",
      component: AcceuilComponent,
    },
   
  ],
});

export default router;
