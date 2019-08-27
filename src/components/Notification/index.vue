<template>
  <el-dropdown
    class="notification-wrapper"
    trigger="click"
    @command="handleCommand"
  >
    <el-badge :value="notificationList.length">
      <svg-icon icon-class="notification" />
    </el-badge>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in notificationList"
        :key="item.uuid"
        :command="item.type"
      >
        {{ item }}
      </el-dropdown-item>
      <el-dropdown-item v-show="!notificationList.length">
        暂无消息
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'Notification',
  data () {
    return {
      notificationList: [
        { uuid: 1, type: 'TBOX', time: 1523434323223, content: '这是一段消息' },
        { uuid: 2, type: 'IHU', time: 1523434323223, content: '这是一段消息' },
        { uuid: 3, type: 'TBOX1', time: 1523434323223, content: '这是一段消息' },
        { uuid: 4, type: 'IHU1', time: 1523434323223, content: '这是一段消息' }
      ]
    }
  },
  methods: {
    handleCommand (command) {}
  }
}
</script>
