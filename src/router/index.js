import Vue from 'vue'
import Router from 'vue-router'
import consoleChildRoute from './console'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/login'
import Frame from '@/pages/console/frame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页面',
      component: Login
    },
    {
      path: '/',
      component: Frame,
      children: consoleChildRoute.routes
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
