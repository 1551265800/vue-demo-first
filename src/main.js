import Vue from 'vue'
/* import App from './App.vue' */
import text from'./text.vue'

Vue.config.productionTip = false
//全局组件
import Count from './components/Count.vue'
Vue.component("MyCount",Count);
new Vue({
  render: h => h(text),
}).$mount('#app')
