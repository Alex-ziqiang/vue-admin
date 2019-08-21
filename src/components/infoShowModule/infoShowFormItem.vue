<template>
  <span class="form-item_wrapper">
    <el-form-item
      v-for="(item,index) in data"
      :key="index"
      :label="item.label"
    >
      <el-tooltip
        v-if="item.show"
        effect="dark"
        :content="item.value"
        placement="top"
      >
        <span>{{ item.value }}</span>
      </el-tooltip>
      <span v-else>{{ item.value }}</span>
    </el-form-item>
  </span>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .form-item_wrapper {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
