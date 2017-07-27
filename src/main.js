import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './home/App.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
  	routes: routes
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
