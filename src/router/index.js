import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import wo from '@/components/wo'
import one from '@/components/one'
import fenlei from '@/components/fenlei'
import gouwuche from '@/components/gouwuche'
import details from '@/components/details/details'
import register from '@/components/register'
import login from '@/components/login'
import logged from '@/components/logged'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '/one',
          component: one,
        },
        {
          path: '/wo',
          component: wo,
        },
        {
          path: '/gouwuche',
          component: gouwuche,
        },
        {
          path: '/fenlei',
          component: fenlei,
        },
      ]
    },
    {
      path: '*',
      redirect: '/one',

    },
    {
      path:'/details',
      component:details,
     
    },
    {
      path:'/register',
      component:register,
     
    },
    {
      path:'/login',
      component:login,
     
    },
    {
      path:'/logged',
      component:logged,
     
    },


  ],
  linkActiveClass: 'sty'

})
