import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout';

Vue.use(VueRouter)

const routes = [{
    path: '/vuehome',
    name: 'vuehome',
    component: () => import('@/views/VueHome')
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      component: () => import('@/views/home/index'),
      name: 'home',
      meta: {
        title: '首页'
      }
    }]
  },
  {
    path: '/test',
    component: () => import('@/views/Test'),
    children: [{
      path: '',
      components: {
        default: () => import('@/views/home/index'),
        home: () => import('@/views/VueHome')
      }
    }]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error-page/404')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router