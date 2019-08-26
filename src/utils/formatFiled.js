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
  vehicleLifeStatus: {
    'PRODUCTION_WAREHOUSED': '生产已入库',
    'SALE_WAREHOUSED': '销售已入库',
    'VEHICLE_SOLD': '车辆已售出',
    'VEHICLE_ACTIVATED': '车辆已激活'
  },
  produceDate: val => {
    return formatDate(val, 'yyyy-MM-dd')
  },
  factoryDate: val => {
    return formatDate(val, 'yyyy-MM-dd')
  },
  collectTime: val => {
    return formatDate(val, 'yyyy-MM-dd HH:mm:ss')
  },
  contactNumber: val => {
    return val ? '+86' + val : ''
  }
}

export const formatFiled = (key, value) => {
  if (!filedMap[key]) return
  if (typeof filedMap[key] === 'function') {
    return filedMap[key](value)
  } else {
    return filedMap[key][value] || value
  }
}

export const formatter = (row, column, cellValue, index) => {
  if (!filedMap[column.property]) return
  if (typeof filedMap[column.property] === 'function') {
    return filedMap[column.property](cellValue)
  } else {
    return filedMap[column.property][cellValue] || cellValue
  }
}
