import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import User from '../pages/User.vue'
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/a',
    name: 'home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [{
        path: 'home',
        component: Home
      }, {
        path: '',
        component: About
      }

    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFound
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
  routes
})

export default router