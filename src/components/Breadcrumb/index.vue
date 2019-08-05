<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in $route.matched">
        <el-breadcrumb-item
          v-if="item.path"
          :key="item.path"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbComp'
}
</script>
<style lang="scss">
  .breadcrumb-wrapper {
    font-size: 12px;
    padding: 13px 32px;
    background-color: #D1D7DF;
    .el-breadcrumb__separator,
    .el-breadcrumb__inner {
      color: #4A4A4A;
    }
  }
</style>
