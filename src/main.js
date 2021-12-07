import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import feather from 'vue-icon'
Vue.use(feather, 'v-icon')
new Vue({
    el: '#app',
    render: h => h(App)
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
