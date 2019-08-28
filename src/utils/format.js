import { formatDate } from 'element-ui/src/utils/date-util'
export const filedMap = {
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
  reasonType: {
    THEFT: '被盗',
    TIRED_DRIVING: '疲劳驾驶',
    UNLOCK: '未锁车',
    WIN_UNCLOSE: '未关窗',
    SUPPLY: '馈电',
    UNEXCEPT_MOVE: '拖车通知',
    ACCELERATE: '急加速',
    DECELERATE: '急减速',
    TURN: '急转弯',
    OVERSPEED: '超速',
    NO_SEATBELT: '未系安全带',
    NO_STEER_WHEEL: '未掌控方向盘',
    LIGHT_UNCLOSE: '车灯未关',
    UNSAFE: '不安全驾驶通知',
    CERT_SAVE_FAILED: '证书保存失败',
    TURN_WITHOUT_LIGHT: '转弯不打转向灯',
    NEUTRAL_GEAR_DRIVING: '空挡滑行'
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
  console.log(column)
  if (!filedMap[column.property]) return
  if (typeof filedMap[column.property] === 'function') {
    return filedMap[column.property](cellValue)
  } else {
    return filedMap[column.property][cellValue] || cellValue
  }
}

/**
 * reconstructObject 分解对象为数组，其中包含对象的key\value值
 * @param {object} obj
 * @return Array
 */
export const reconstructObject = (obj) => {
  let arr = []
  for (let key in obj) {
    arr.push({
      label: obj[key],
      value: key
    })
  }
  return arr
}
