import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index')
  },
  {
    path: '',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '主页',
      icon: 'iconfont icon-home'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/index')
      }
    ]
  }
]
const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
})
const router = createRouter()
export default router
