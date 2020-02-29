import Vue from 'vue'
import Router from 'vue-router'
import user_login from '@/views/user_login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user_login',
      component: user_login
    }
  ]
})
