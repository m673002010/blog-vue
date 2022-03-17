import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Personal from '@/views/Personal.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/personal', component: Personal }
  ]
})
