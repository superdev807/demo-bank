import Vue from 'vue'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store'
import { plainAxiosInstance, securedAxiosInstance } from './api'
import vuetify from './plugins/vuetify'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueAxios, {
  plain: plainAxiosInstance,
  secured: securedAxiosInstance,
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
