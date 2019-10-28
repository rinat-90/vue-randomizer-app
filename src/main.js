import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { store } from './store'
import draggable from 'vuedraggable';

Vue.use(draggable)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
