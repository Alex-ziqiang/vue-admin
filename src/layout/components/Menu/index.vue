<template>
  <div class="menu-wrapper">
    <!-- 菜单部分 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      :router="true"
      text-color="#F0F0F0"
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
        v-for="item in routes.filter(item => !item.hidden)"
        :key="item.name"
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
  computed: {
    ...mapGetters([
      'isCollapse',
      'routes'
    ])
  },
  methods: {
    collapseMenu () {
      this.$store.commit('TOGGLE_MENU', !this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.collapse-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: $collapseBtnHeight;
  background-color: $collapseBtnBg;
  cursor: pointer;
  .btn-item {
    width: 24px;
    height: 2px;
    background-color: $collapseBtn;
  }
  .center {
    margin: 4px 0;
  }
}
</style>
