import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from  './views/Login.vue'
import store from './store/';

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  console.log(store);
  if (store.getters.isLoggedIn) {
    next()
    return
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
    }
  ]
});

export default router;
