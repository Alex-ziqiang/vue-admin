<template>
  <div class="menu-wrapper">
    <!-- 菜单部分 -->
    <template
      v-for="item in menuList.filter(item => !item.hidden)"
    >
      <!-- 有子路由，且父路由的path不为空-->
      <el-submenu
        v-if="item.children && item.path"
        :key="`${item.path}`"
        :index="`${item.path}`"
      >
        <template slot="title">
          <i :class="item.meta.icon" />
          <span
            v-if="item.meta && item.meta.title"
            slot="title"
          >{{ item.meta.title }}</span>
        </template>
        <!-- 当有子集时再次调用该组件(递归) -->
        <Menu :menu-list="item.children" />
      </el-submenu>
      <!-- 无子路由 -->
      <el-menu-item
        v-else
        :key="item.path||item.children[0].path"
        :index="item.path || item.children[0].path"
      >
        <i :class="item.meta.icon" />
        <span
          v-if="item.meta && item.meta.title"
          slot="title"
        >{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
  // 如果没有此样式的话  折叠有子级菜单的父菜单文字是不会隐藏的
  .el-menu--collapse .el-menu-item span,
    .el-menu--collapse .el-submenu .el-submenu__title span,
     .el-menu--collapse .el-submenu__icon-arrow{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
    }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    .el-menu-item:not(.is-active):hover,.el-submenu__title:hover{
      color: #1D8DFF !important;
      background-color: #1B273C !important;
      .iconfont{
        color: #1D8DFF !important;
      }
    }
  }
</style>
<style lang="scss" scoped>

</style>
