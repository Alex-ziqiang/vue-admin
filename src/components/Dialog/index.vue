<template>
  <el-dialog
    v-bind="$attrs"
    :visible="outerVisible"
    :width="width"
    :top="top"
    :close-on-click-modal="type === 'normal'"
    destroy-on-close
    @open="outerOpen"
    @close="outerClose"
  >
    <!-- inner  dialog -->
    <el-dialog
      v-if="showInner"
      append-to-body
      :width="innerWidth"
      :title="innerTitle"
      :visible="innerVisible"
      @close="innerClose"
    >
      <template slot="title">
        <slot name="innerTitle" />
      </template>
      <slot name="innerBody" />
      <template slot="footer">
        <slot name="innerFooter" />
      </template>
    </el-dialog>
    <!-- tab -->
    <template
      v-if="type === 'tab'"
      slot="title"
    >
      <el-tabs
        :value="selectedTab"
        :type="tabType"
        @tab-click="tabClick"
      >
        <el-tab-pane
          v-for="item in tabList"
          :key="item.value"
          :name="item.value"
          :label="item.name"
          :lazy="true"
        />
      </el-tabs>
    </template>
    <!-- slot title -->
    <template slot="title">
      <slot name="outerTitle" />
    </template>
    <!-- add and edit footer -->
    <template
      v-if="type === 'add' || type === 'edit'"
      slot="footer"
    >
      <el-button
        size="small"
        @click="outerClose"
      >
        取消
      </el-button>
      <el-button
        type="primary"
        size="small"
        :loading="loading"
        @click="submit"
      >
        {{ submitText }}
      </el-button>
    </template>
    <!-- body -->
    <slot />
    <!-- footer -->
    <template slot="footer">
      <slot name="outerFooter" />
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: 'Dialog',
  inheritAttrs: false,
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    },
    width: {
      type: String,
      default: '30vw'
    },
    top: {
      type: String,
      default: '15vh'
    },
    innerVisible: {
      type: Boolean,
      default: false
    },
    innerWidth: {
      type: String,
      default: '30vw'
    },
    innerTitle: {
      type: String,
      default: ''
    },
    showInner: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'normal'
    },
    tabList: {
      type: Array,
      default: () => []
    },
    selectedTab: {
      type: String,
      default: ''
    },
    tabType: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    submitText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    outerClose () {
      this.$emit('cancel')
      this.$emit('update:outerVisible', false)
    },
    innerClose () {
      this.$emit('update:innerVisible', false)
    },
    outerOpen () {
      this.$emit('outerOpen')
    },
    tabClick (params) {
      this.$emit('updateTab', params.name)
      this.$emit('update:selectedTab', params.name)
    },
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
