<template>
  <section class="app-main">
    <Breadcrumb v-show="$route.path !== '/index'" />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'AppMain',
  components: { Breadcrumb }
}
</script>
<style lang="scss" scoped>
.app-main {
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden; // 解决flex布局下element-ui table 宽度不能自适应问题
}
</style>
