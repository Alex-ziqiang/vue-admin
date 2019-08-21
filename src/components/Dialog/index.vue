<template>
  <el-dialog
    v-bind="$attrs"
    :visible="outerVisible"
    :width="outerWidth"
    :close-on-click-modal="type === 'normal'"
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
      <el-button @click="outerClose">
        取消
      </el-button>
      <el-button
        type="primary"
        @click="submit"
      >
        确定
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
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    },
    outerWidth: {
      type: String,
      default: '30vw'
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
      default () {
        return []
      }
    },
    selectedTab: {
      type: String,
      default: ''
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
