import Vue from 'vue'
import Router from 'vue-router'
import TextFamily from '@/components/TextFamily'
import TextView from '@/components/TextView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tekstid',
      props: true,
      name: 'TextView',
      component: TextView
    },
    {
      path: '/tekstipere',
      props: true,
      name: 'TextFamily',
      component: TextFamily
    }
  ],
  mode: 'history'
})
