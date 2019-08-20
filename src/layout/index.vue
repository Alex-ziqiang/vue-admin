<template>
  <div class="app-wrapper">
    <Header />
    <div class="main">
      <Menu />
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: { Header, Menu, AppMain }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .main {
    display: flex;
    flex: auto; // div.main 占满div.row除了header的额外空间
    height: calc(100% - 62px);
    .app-main {
      display: flex;
      flex: auto;
      flex-direction: column;
      background: #f0f2f5;
      overflow-x: hidden; // 解决flex布局下element-ui table 宽度不能自适应问题
    }
  }
}
</style>
