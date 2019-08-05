<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain'
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
