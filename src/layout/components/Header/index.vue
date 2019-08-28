<template>
  <div class="header-wrapper">
    <div class="left">
      <span class="web-title">vue-admin</span>
    </div>
    <div class="right">
      <Screenfull
        id="screenfull"
        class="right-item hover-effect"
      />
      <Notification class="right-item notification hover-effect" />
      <el-dropdown
        class="right-item hover-effect"
        @command="handleCommand"
      >
        <div class="avatar-wrapper">
          <img
            src="@/assets/images/avatar.png"
            class="role-img"
          >
        </div>
        <!-- <div>
          <div class="role">
            {{ roleFormat(operatorBean.roleType) }}
          </div>
          <div class="username">
            {{ operatorBean.userName }}
          </div>
        </div> -->
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
    <UserInfo :outer-visible.sync="userInfoOuterVisible" />
    <ModifyPassword :outer-visible.sync="modifyPasswordOuterVisible" />
  </div>
</template>

<script>
import UserInfo from './UserInfo'
import ModifyPassword from './ModifyPassword'
import Screenfull from '@/components/Screenfull'
import Notification from '@/components/Notification'
export default {
  name: 'Header',
  components: { UserInfo, ModifyPassword, Screenfull, Notification },
  data () {
    return {
      userInfoOuterVisible: false,
      modifyPasswordOuterVisible: false
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'logout') {
        this.logout()
      } else if (command === 'userInfo') {
        this.userInfoOuterVisible = true
      } else {
        this.modifyPasswordOuterVisible = true
      }
    },
    logout () {
      this.$confirm('确认要退出登录吗?', {
        type: 'warning',
        showClose: false
      }).then(() => {
        this.$store.dispatch('manager/handleLogOut').then(() => {
          this.$router.push('/login')
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.header-wrapper {
  height: $headerHeight;
  overflow: hidden;
  position: relative;
  background: $headerBg;
  box-shadow: 0 2px 6px rgba(0, 21, 41, 0.35);
  .left {
    display: inline-block;
    height: 100%;
    line-height: $headerHeight;
    .web-title {
      font-size: 23px;
      margin-left: 66px;
      color: #fff;
      font-weight: 600;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      vertical-align: middle;
    }
  }
  .right {
    float: right;
    .right-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 20px;
      color: #FFF;
      vertical-align: middle;

      &.hover-effect {
        cursor: pointer;
      }
    }
    .notification {
      font-size: 28px;
    }
    .avatar-wrapper {
      height: 100%;
      line-height: $headerHeight;
      .role-img {
        vertical-align: middle;
      }
    }
  }
}
</style>
