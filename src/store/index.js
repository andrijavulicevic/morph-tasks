import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import auth from './auth.module';

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'morph-spa',
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [vuexLocal.plugin]
})
