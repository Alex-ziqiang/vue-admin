import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPage/404.vue'),
    hidden: true
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
        path: '/index',
        name: 'index',
        component: () => import('@/views/home'),
        meta: {
          // title: '主页'
        }
      }
    ]
  },
  {
    path: '/vehicle',
    component: Layout,
    redirect: '/vehicle/security',
    meta: {
      title: '车辆管理',
      icon: 'iconfont icon-vehicles'
    },
    children: [
      {
        path: '/vehicle/security',
        name: 'security',
        component: () => import('@/views/vehicles/security'),
        meta: {
          title: '安防记录'
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/organization',
    meta: {
      title: '企业管理',
      icon: 'iconfont icon-enterprise'
    },
    children: [
      {
        path: '/organization',
        name: 'organization',
        component: () => import('@/views/organizations/organization'),
        meta: {
          title: '企业管理'
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
/* 权限路由：roles: SUPER: 超级管理员，SUPER_MGR: 管理员 */
export const asyncRoutes = [
  {
    path: '/permission',
    redirect: '/permission/super',
    component: Layout,
    meta: {
      title: '权限测试',
      icon: 'iconfont icon-home-index'
    },
    children: [
      {
        path: '/permission/super',
        name: 'super',
        component: () => import('@/views/permission/super'),
        meta: {
          title: '超级管理员权限',
          roles: ['SUPER']
        }
      },
      {
        path: '/permission/admin',
        name: 'admin',
        component: () => import('@/views/permission/admin'),
        meta: {
          title: '管理员权限',
          roles: ['SUPER_MGR']
        }
      },
      {
        path: '/permission/all',
        name: 'all',
        component: () => import('@/views/permission/all'),
        meta: {
          title: '所有权限'
          // roles: ['SUPER', 'SUPER_MGR'] // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    mode: 'history',
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}

export default router
