

/* Layout */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const constantRoutes = [


  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        // component: (resolve) => require(['@/views/dashboard/index'], resolve),
        name: 'Dashboard',
        meta: { title: '主页', icon: 'dashboard', affix: true }
      }
    ]
  }, {
    path: '*',
    name: 'notfount',
    component: Layout
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export default new VueRouter({
  mode: "history",
  routes: constantRoutes
})
