import { createRouter, createWebHistory } from "vue-router";
import AcceuilComponent from "../Components/AcceuilComponent.vue";
import timeComponent from "../Components/timeComponent.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "Acceuil",
      component: AcceuilComponent,
      children:{
        path: "",
        name: "",
        component: timeComponent,
      }
    },

  ],
});

export default router;
