import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import vuetify from './plugins/vuetify';
import VeeValidate from 'vee-validate';
import {dateFilter} from './filters';

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
