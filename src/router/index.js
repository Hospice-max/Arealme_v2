import { createRouter, createWebHistory } from "vue-router";
import AcceuilComponent from "@/components/PagePrincipale.vue";
import timeComponent from "@/components/timeComponent.vue";
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

  ],
});

export default router;
