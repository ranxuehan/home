import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
import './styles/common/base.css'
import cookie from "js-cookie";
import './components/ivews/rem.js';
Vue.prototype.$cookies = cookie
Vue.config.productionTip = false
Vue.use(cookie)


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
