import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

import Work from './modules/work'
import Outlink from './modules/outlink'

Vue.use(VueRouter)

export const constantRoutes = [

  {
    hidden: true,
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录',
      icon: 'svg-name'
    }
  },
  {
    hidden: true,
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '404',
      icon: ''
    }
  }
]

// eslint-disable-next-line no-unused-vars
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: '首页', icon: 'el-icon-house' }
      }
    ]
  },

  {
    hidden: true,
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        hidden: true,
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404' }
      }
    ]
  },
  Work,
  {
    path: '/log',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/log/index'),
        name: 'log',
        meta: { title: '日志', icon: 'el-icon-document' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index'),
        name: 'user',
        meta: { title: '我的', icon: 'el-icon-set-up' }
      }
    ]
  },
  {
    path: '/test',
    redirect: '/test/index',
    component: Layout,
    children: [
      {
        path: '/index',
        component: () => import('@/views/test/index'),
        meta: { title: '测试页面', icon: 'el-icon-s-promotion', roles: ['admin'] }
      }
    ]
  },

  Outlink,
  { hidden: true, path: '*', redirect: '/404' }
]

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
