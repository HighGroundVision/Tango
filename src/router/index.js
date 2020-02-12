import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import League from '@/components/League'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/league',
      name: 'League',
      component: League
    }
  ]
})
