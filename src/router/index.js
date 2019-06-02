import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['~/components/home/home'], resolve)
const homeOther = resolve => require(['~/components/home/home-other'], resolve)
const homeDetails = resolve => require(['~/components/home/home-details'], resolve)
const homeVideo = resolve => require(['~/components/home/home-video'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home-other',
      name: 'home-other',
      component: homeOther
    },
    {
      path: '/home-details',
      name: 'home-details',
      component: homeDetails
    },
    {
      path: '/home-video',
      name: 'home-video',
      component: homeVideo
    },
  ]
})
