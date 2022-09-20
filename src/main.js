import Vue from 'vue'
/* import App from './App.vue' */
import text from'./text.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(text),
}).$mount('#app')
