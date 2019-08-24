import { formatDate } from 'element-ui/src/utils/date-util'
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
  },
  produceDate: val => {
    return formatDate(val, 'yyyy-MM-dd')
  },
  factoryDate: val => {
    return formatDate(val, 'yyyy-MM-dd')
  }
}

const formatFiled = (key, value) => {
  if (!filedMap[key]) return
  if (typeof filedMap[key] === 'function') {
    return filedMap[key](value)
  } else {
    return filedMap[key][value] || value
  }
}

export default formatFiled
