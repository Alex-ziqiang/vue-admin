const filedMap = {
  roleType: {
    SUPER: '超级管理员'
  }
}

const formatFiled = (property, value) => {
  return filedMap[property] ? filedMap[property][value] ? filedMap[property][value] : value : ''
}

export default formatFiled
