const validatesMap = {
  /* 账号校验 长度6-32位，允许大小写英文、数字、下划线 */
  validateAccount: (val, callback) => {
    const reg = /^[a-zA-Z0-9_]{6,32}$/
    const msg = '长度8-32，数字、特殊符号及大小写字母四选三'
    reg.test(val) ? callback() : callback(new Error(msg))
  },
  /* 密码校验 长度8-32，数字、特殊符号及大小写字母四选三 */
  validatePassword: (val, callback) => {
    const reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_]+$)(?![a-z0-9]+$)(?![a-z\\W_]+$)(?![0-9\\W_]+$)[a-zA-Z0-9\\W_]{8,32}$/
    const msg = '长度8-32，数字、特殊符号及大小写字母四选三'
    reg.test(val) ? callback() : callback(new Error(msg))
  },
  /* 验证码校验 长度4的数字 */
  validateAuthCode: (val, callback) => {
    const reg = /^\d{4}$/
    const msg = '请输入4位数字验证码'
    reg.test(val) ? callback() : callback(new Error(msg))
  },
  /* 手机号校验 由以1开头的11位数字组成  */
  validateMobile: (val, callback) => {
    const reg = /^1\d{10}$/
    const msg = '请输入正确11位手机号'
    reg.test(val) ? callback() : callback(new Error(msg))
  },
  /* 邮箱校验 */
  validateEmail: (val, callback) => {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    const msg = '请输入正确邮箱'
    reg.test(val) ? callback() : callback(new Error(msg))
  }
}

/* 生成表单自定义校验函数 */
const formValidate = (key) => (rule, val, callback) => {
  return validatesMap[key](val, callback)
}

export default formValidate
