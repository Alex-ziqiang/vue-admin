<template>
  <div class="login-wrap">
    <Form
      ref="loginForm"
      class="login-form"
      label-position="top"
      :form="loginForm"
      :form-items="loginFormItems"
      :rules="loginRules"
      @keyup.enter.native="submitForm"
    >
      <template slot="authCode">
        <el-input
          v-model="loginForm.authCode"
          class="authCode"
          :maxlength="4"
          placeholder="验证码"
        />
        <img
          class="code"
          :src="authCodeSrc"
          @click="createCode"
        >
      </template>
      <template slot="submit">
        <el-button
          :loading="loading"
          type="primary"
          @click="submitForm"
        >
          登录
        </el-button>
      </template>
    </Form>
  </div>
</template>

<script>
import formValidate from '@/utils/validates'
import Form from '@/components/Form'
export default {
  name: 'Login',
  components: { Form },
  data () {
    return {
      authCodeSrc: '',
      loginForm: {},
      loginFormItems: [
        {
          type: 'input',
          label: '账号',
          value: 'account',
          clearable: true
        },
        {
          type: 'password',
          label: '密码',
          value: 'password',
          showPassword: true,
          clearable: true
        },
        {
          slot: 'authCode',
          label: '验证码'
        },
        {
          slot: 'submit'
        }
      ],
      loginRules: {
        account: [
          {
            validator: formValidate('validateAccount'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: formValidate('validatePassword'),
            trigger: 'blur'
          }
        ],
        authCode: [
          {
            validator: formValidate('validateAuthCode'),
            trigger: 'blur'
          }
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
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          const data = { ...this.loginForm, authCodeUUID: this.time }
          this.$store
            .dispatch('manager/handleLogin', data)
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
</style>
