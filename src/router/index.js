import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue') 
  },

  {
    path: "/Images",
    name: "Images",
    component: () => import(/* webpackChunkName: "Images" */ '../views/Images.vue') 
  },  
  
  {
    path: "/Favorites",
    name: "Favorites",
    component: () => import(/* webpackChunkName: "Favorites" */ '../views/Favorites.vue') 
  },

  {
    path: "/Fullscreen",
    name: "Fullscreen",
    component: () => import(/* webpackChunkName: "Fullscreen" */ '../views/Fullscreen.vue') 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
