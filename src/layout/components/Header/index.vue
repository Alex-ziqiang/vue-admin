<template>
  <div class="header-wrapper">
    <div class="left">
      <span class="web-title">管理平台</span>
    </div>
    <div class="right">
      <el-dropdown
        class="right-item"
        @command="handleCommand"
      >
        <div class="dropdown-link">
          <img
            src="@/assets/images/avatar.png"
            class="role-img"
          >
          <!-- <div>
            <div class="role">
              {{ roleFormat(operatorBean.roleType) }}
            </div>
            <div class="username">
              {{ operatorBean.userName }}
            </div>
          </div> -->
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo">
            账号信息
          </el-dropdown-item>
          <el-dropdown-item command="modifyPassword">
            密码修改
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  height: 62px;
  overflow: hidden;
  position: relative;
  background: #1D2B36;
  .left {
    display: inline-block;
    height: 100%;
    line-height: 62px;
    .web-title {
      font-size: 23px;
      color: #fff;
      margin-left: 66px;
      letter-spacing: 1px;
      line-height: 1;
    }
  }
  .right {
    float: right;
    height: 100%;
    line-height: 62px;
  }
}
</style>
