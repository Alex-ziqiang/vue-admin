const filedMap = {
  roleType: {
    'SUPER': '超级管理员'
  },
  vehType: {
    'PASSENGER_CAR': '乘用车及客车',
    'SPECIAL_CAR': '专用汽车',
    'SEMITRAILERTRACTOR_CAR': '半挂牵引车',
    'TRUCKS_CAR': '货车'
  },
  classTwoBaseplate: {
    'true': '是',
    'false': '否'
  }
}

const formatFiled = (key, value) => {
  return filedMap[key] ? filedMap[key][value] || value : value
}

export default formatFiled
