import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Personal from '@/components/Personal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/personal', component: Personal }
  ]
})
