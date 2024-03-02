import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import Comp01View from '../views/Comp01View.vue'

const routes = [
  
  { //Este primer elemento siempre va tal cual aparece aquí, sólo cambiamos en 'component:'
    //el nombre del componente de ../views que se cargará como página de inicio
    path: '/',
    name: 'home',
    component: InicioView
  },

  {
    path: '/Comp01View',
    name: 'Comp01View',
    component: Comp01View
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
