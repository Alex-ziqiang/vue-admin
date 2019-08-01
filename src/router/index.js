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
    path: '/404',
    component: () => import('@/views/errorPage/404.vue'),
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
        component: () => import('@/views/home/index'),
        meta: {
          title: '主页',
          icon: 'iconfont icon-home'
        }
      }
    ]
  }
]

/**
 * meta: {
 *  role: 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 * }
 */
/* 权限路由：roles: SUPER: 超级管理员，ADMIN: 管理员 */
export const asyncRoutes = [
  {
    path: '/permission',
    redirect: '/permission/superAdmin',
    component: Layout,
    meta: {
      title: '权限测试',
      icon: 'iconfont icon-home-index'
    },
    children: [
      {
        path: 'superAdmin',
        name: 'superAdmin',
        component: () => import('@/views/permission/superAdmin'),
        meta: {
          title: '超级管理员权限',
          roles: ['SUPER']
        }
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/permission/admin'),
        meta: {
          title: '管理员权限',
          roles: ['ADMIN']
        }
      },
      {
        path: 'all',
        name: 'all',
        component: () => import('@/views/permission/all'),
        meta: {
          title: '所有权限'
          // roles: ['SUPER', 'ADMIN'] // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}

export default router
