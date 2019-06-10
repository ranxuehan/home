import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['~/components/home/home'], resolve)
const homeApp = resolve => require(['~/components/home/home-app'], resolve)
const homeOther = resolve => require(['~/components/home/home-other'], resolve)
const homeDetails = resolve => require(['~/components/home/home-details'], resolve)
const homeVideo = resolve => require(['~/components/home/home-video'], resolve)


Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/home-app',
      name: 'home-app',
      component: homeApp,
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

router.beforeEach((to, from, next) => {
  var sUserAgent = navigator.userAgent.toLowerCase();
  if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
    console.log('appppp--router')
    if (to.path === '/home-app') {
      next()
    } else {
      next('/home-app');
    }
  } else {
    console.log('pcccc--router')
    if (to.path === '/home') {
      next()
    }else{
      next('/home');
    }
  }
})

export default router;