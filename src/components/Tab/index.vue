<template>
  <el-tabs
    :value="value"
    type="border-card"
    v-on="$listeners"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.label"
      :label="tab.label"
      :name="tab.name"
    >
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
