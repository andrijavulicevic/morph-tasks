import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from  './views/Login'
import Favorites from './views/Favorites';
import store from './store/';

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next()
    return;
  }
  next('/login');
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      beforeEnter: ifAuthenticated
    }
  ]
});

export default router;
