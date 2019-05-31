import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['~/components/home/home'], resolve)
const homeOne = resolve => require(['~/components/home/home-one'], resolve)
const homeTwo = resolve => require(['~/components/home/home-two'], resolve)
const homeThree = resolve => require(['~/components/home/home-three'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home-one',
      name: 'home-noe',
      component: homeOne
    },
    {
      path: '/home-two',
      name: 'home-two',
      component: homeTwo
    },
    {
      path: '/home-three',
      name: 'home-three',
      component: homeThree
    },
  ]
})
