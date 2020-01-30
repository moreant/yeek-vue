import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

import Work from './modules/work'

Vue.use(VueRouter)

const constantRoutes = [

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404'),
    meta: { title: '404' }
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/test/index'),
        meta: { title: '测试页面' }
      }
    ],
    meta: { title: '测试' }
  },
  { path: '*', redirect: '/login', hidden: true }

]

// eslint-disable-next-line no-unused-vars
const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: {
          title: '首页'
        }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'ErrorPages',
      icon: '404'
    },
    children: [
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404' }
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    redirect: 'noRedirect',
    name: 'LogPages',
    meta: {
      title: 'LogPages',
      icon: '404'
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/log/index'),
        name: 'log',
        meta: { title: 'log' }
      }
    ]
  },
  Work,
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
