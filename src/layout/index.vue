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
  components: { Header, Menu, AppMain },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .main {
    height: 100%;
    flex: auto; // div.main 占满div.row除了header的额外空间
    display: flex;
    .app-main {
      flex: auto;
      flex-direction: column;
    }
  }
}
</style>
