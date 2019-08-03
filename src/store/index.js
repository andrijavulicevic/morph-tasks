import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import auth from './auth.module';
import videos from './videos.module';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'morph-spa',
  storage: window.localStorage,
  modules: ['auth']
});

export default new Vuex.Store({
  modules: {
    auth,
    videos
  },
  plugins: [vuexLocal.plugin]
});
