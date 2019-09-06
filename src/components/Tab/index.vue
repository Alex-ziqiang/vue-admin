<template>
  <el-tabs
    :value="value"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.value"
      :label="tab.label"
      :name="tab.name"
    >
      <slot />
      <component
        :is="value === tab.name ? tab.component : false"
        :name="value"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Tab',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    }
  }
}
</script>
