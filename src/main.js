import '@/stylus/main.styl'
import '@mdi/font/css/materialdesignicons.css'
import './components/index'
import './directives/index'
import './filters/index'
import './mixins/index'
import './plugins/vuetify'
import './plugins/vee-validate'
import './registerServiceWorker'
import '@babel/polyfill'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
