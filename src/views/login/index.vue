<template>
  <div class="login-wrap">
    <div class="login-content">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        label-position="top"
        @keyup.enter.native="submitForm('loginForm')"
      >
        <el-form-item
          label="账号"
          prop="account"
        >
          <el-input
            v-model="loginForm.account"
            placeholder="账号"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
          />
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="authCode"
        >
          <el-input
            v-model="loginForm.authCode"
            :maxlength="4"
            placeholder="验证码"
            class="authCode"
          />
          <img
            class="code"
            :src="authCodeSrc"
            @click="createCode"
          >
        </el-form-item>
        <div class="login-btn">
          <el-button
            :loading="loading"
            type="primary"
            @click="submitForm('loginForm')"
          >
            登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
      authCodeSrc: '',
      loginForm: {},
      loginRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        authCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { max: 4, min: 4, message: '请输入4位验证码', trigger: 'blur' }
        ]
      },
      time: '',
      loading: false
    }
  },
  created () {
    this.createCode()
  },
  methods: {
    createCode () {
      this.time = new Date().getTime()
      const authCodeApi = '/api/v0/authcode' // 获取图片验证码
      this.authCodeSrc = `${authCodeApi}?uuid=${this.time}`
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          const data = { ...this.loginForm, 'authCodeUUID': this.time }
          this.$store.dispatch('manager/handleLogin', data)
            .then(res => {
              this.$router.push('/index')
              this.loading = false
            })
            .catch(() => {
              this.createCode()
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  .login-content {
    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 35px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid #ccc;
      .authCode {
        width: 60%;
      }
      .code {
        float: right;
      }
    }
  }
}
</style>
