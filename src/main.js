import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Создаем Vue-экземпляр только один раз
Vue({
  el: '#app',
  render: h => h(App)
})
