<template>
  <div>
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      :router="true"
      text-color="#F0F0F0"
      active-text-color="#FFFFFF"
      background-color="#1B273C"
    >
      <!-- 展开折叠按钮 -->
      <div
        class="collapse-btn"
        @click="collapseMenu"
      >
        <div class="btn-item" />
        <div class="btn-item center" />
        <div class="btn-item" />
      </div>
      <Menu :menu-list="menuList" />
    </el-menu>
  </div>
</template>
<script>
import Menu from './components/menu'
export default {
  name: 'Layout',
  components: { Menu },
  data () {
    return {
      menuList: [
        {
          path: '',
          // component: Layout,
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
        },
        {
          path: '/vehicles',
          redirect: '/vehicles/config',
          // component: Layout,
          meta: {
            title: '车辆管理',
            icon: 'iconfont icon-vehicles'
          },
          children: [
            {
              path: 'config',
              name: 'config',
              // component: () => import('@/views/vehicles/configuration.vue'),
              meta: {
                title: '配置信息',
                icon: 'iconfont placeholder'
              },
              children: [
                {
                  path: '配置信息111',
                  name: 'config111',
                  meta: {
                    title: '配置信息111',
                    icon: 'iconfont placeholder'
                  },
                  children: [
                    {
                      path: '配置信息222',
                      name: 'config222',
                      meta: {
                        title: '配置信息222',
                        icon: 'iconfont placeholder'
                      }
                    }
                  ]
                }
              ]
            },
            {
              path: 'monitor',
              name: 'monitor',
              // component: () => import('@/views/vehicles/monitor.vue'),
              meta: {
                title: '车辆监测',
                icon: 'iconfont placeholder'
              }
            },
            {
              path: 'security',
              name: 'security',
              // component: () => import('@/views/vehicles/security.vue'),
              meta: {
                title: '安防记录',
                icon: 'iconfont placeholder'
              }
            }
          ]
        },
        {
          path: '/parts',
          redirect: '/parts/tbox',
          // component: Layout,
          meta: {
            title: '零件管理',
            icon: 'iconfont icon-parts'
          },
          children: [
            {
              path: 'tbox',
              name: 'tbox',
              // component: () => import('@/views/parts/tbox.vue'),
              meta: {
                title: 'T-BOX管理',
                icon: 'iconfont placeholder'
              }
            },
            {
              path: 'ihu',
              name: 'ihu',
              // component: () => import('@/views/parts/ihu.vue'),
              meta: {
                title: 'IHU管理',
                icon: 'iconfont placeholder'
              }
            }
          ]
        },
        {
          path: '/statistic',
          redirect: '/statistic/insight',
          // component: Layout,
          meta: {
            title: '统计分析',
            icon: 'iconfont icon-statistic'
          },
          children: [
            {
              path: 'insight',
              name: 'insight',
              // component: () => import('@/views/statisticAnalysis/insight.vue'),
              meta: {
                title: '数据洞察',
                icon: 'iconfont placeholder',
                roles: ['SUPER', 'SUPER_MGR', 'SUPER_OPR']
              }
            },
            {
              path: 'report',
              name: 'report',
              // component: () => import('@/views/statisticAnalysis/report.vue'),
              meta: {
                title: '数据报表',
                icon: 'iconfont placeholder',
                roles: ['SUPER', 'SUPER_MGR', 'SUPER_OPR']
              }
            }
          ]
        },
        {
          path: '/organizations',
          redirect: '/organizations/management',
          // component: Layout,
          meta: {
            title: '运营企业',
            icon: 'iconfont icon-enterprise'
          },
          children: [
            {
              path: 'organization',
              name: 'organization',
              // component: () => import('@/views/organizations/organization.vue'),
              meta: {
                title: '运营企业管理',
                icon: 'iconfont placeholder'
              }
            },
            {
              path: 'operator',
              name: 'operator',
              // component: () => import('@/views/organizations/operator.vue'),
              meta: {
                title: '运营企业账号',
                icon: 'iconfont placeholder'
              }
            },
            {
              path: 'driver',
              name: 'driver',
              // component: () => import('@/views/organizations/driver.vue'),
              meta: {
                title: '驾驶员管理',
                icon: 'iconfont placeholder'
              }
            }
          ]
        },
        {
          path: '',
          // component: Layout,
          meta: {
            title: '经销商',
            icon: 'iconfont icon-dealer'
          },
          children: [
            {
              path: 'dealer',
              name: 'dealer',
              // component: () => import('@/views/dealer/dealer.vue'),
              meta: {
                title: '经销商',
                icon: 'iconfont icon-dealer',
                roles: ['SUPER', 'SUPER_MGR']
              }
            }
          ]
        },
        {
          path: '',
          // component: Layout,
          meta: {
            title: '服务站',
            icon: 'iconfont icon-station'
          },
          children: [
            {
              path: 'service-station',
              name: 'service-station',
              // component: () => import('@/views/serviceStation/serviceStation.vue'),
              meta: {
                title: '服务站',
                icon: 'iconfont icon-station',
                roles: ['SUPER', 'SUPER_MGR']
              }
            }
          ]
        },
        {
          path: '',
          // component: Layout,
          meta: {
            title: '证书审核',
            icon: 'iconfont iconcertificate'
          },
          children: [
            {
              path: 'certificate',
              name: 'certificate',
              // component: () => import('@/views/certificate/certificate.vue'),
              meta: {
                title: '证书审核',
                icon: 'iconfont iconcertificate',
                roles: ['SUPER', 'SUPER_MGR']
              }
            }
          ]
        },
        {
          path: '/ota',
          redirect: '/ota/ota-realtime',
          // component: Layout,
          meta: {
            title: 'OTA',
            icon: 'iconfont iconota'
          },
          children: [
            {
              path: 'ota-realtime',
              name: 'ota-realtime',
              // component: () => import('@/views/ota/otaRealtime.vue'),
              meta: {
                title: 'OTA实时信息',
                icon: 'iconfont placeholder',
                roles: ['SUPER', 'SUPER_MGR']
              }
            },
            {
              path: 'ota-taskRecord',
              name: 'ota-taskRecord',
              // component: () => import('@/views/ota/taskRecord.vue'),
              meta: {
                title: 'OTA任务记录',
                icon: 'iconfont placeholder',
                roles: ['SUPER', 'SUPER_MGR']
              }
            }
          ]
        },
        {
          path: '/system',
          redirect: '/system/sys-account',
          // component: Layout,
          meta: {
            title: '系统管理',
            icon: 'iconfont icon-system'
          },
          children: [
            {
              path: 'sys-account',
              name: 'sys-account',
              // component: () => import('@/views/system/systemAccount.vue'),
              meta: {
                title: '系统账号管理',
                icon: 'iconfont placeholder',
                roles: ['SUPER', 'SUPER_MGR']
              }
            },
            {
              path: 'log',
              name: 'log',
              // component: () => import('@/views/system/operationLog.vue'),
              meta: {
                title: '操作日志',
                icon: 'iconfont placeholder'
              }
            },
            {
              path: 'sysconfigs',
              name: 'sysconfigs',
              // component: () => import('@/views/system/sysconfigs.vue'),
              meta: {
                title: '系统配置',
                icon: 'iconfont placeholder'
              }
            },
            {
              path: 'notifications',
              name: 'notifications',
              // component: () => import('@/views/system/notifications.vue'),
              meta: {
                title: '消息中心',
                icon: 'iconfont placeholder'
              }
            }
          ]
        }
      ]
    }
  },
  computed: {
    isCollapse () {
      return this.$store.getters.isCollapse
    }
  },
  methods: {
    collapseMenu () {
      this.$store.commit('TOGGLE_MENU', !this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
.collapse-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #131822;
  cursor: pointer;
  .btn-item {
    width: 24px;
    height: 2px;
    background-color: #4582ff;
  }
  .center {
    margin: 4px 0;
  }
}
</style>
