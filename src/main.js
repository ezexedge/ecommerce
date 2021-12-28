import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import feather from 'vue-icon'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Toasted from "vue-toasted";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJDRpEXJcJoTnsIZChAG2uboJhVOTJSDI",
  authDomain: "clasificados-32010.firebaseapp.com",
  databaseURL: "https://clasificados-32010-default-rtdb.firebaseio.com",
  projectId: "clasificados-32010",
  storageBucket: "clasificados-32010.appspot.com",
  messagingSenderId: "997093059400",
  appId: "1:997093059400:web:6e78f4ca4ed1bce971617d"
};


firebase.initializeApp(firebaseConfig)




Vue.use(Toasted);

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(feather, 'v-icon')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

