<template>
  <div class="menu-wrapper">
    <!-- 菜单部分 -->
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
      <menu-item
        v-for="item in menuList.filter(item => !item.hidden)"
        :key="item.path"
        :item="item"
      />
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MenuItem from './MenuItem'
export default {
  name: 'Menu',
  components: { MenuItem },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  methods: {
    collapseMenu () {
      this.$store.commit('TOGGLE_MENU', !this.isCollapse)
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
