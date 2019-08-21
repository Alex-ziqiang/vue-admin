import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import './styles/index.scss' // global css
import './assets/iconfont/iconfont.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon
import './permission' // permission control
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
