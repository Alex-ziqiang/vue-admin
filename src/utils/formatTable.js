import { formatDate } from 'element-ui/src/utils/date-util'
const strategyMap = {
  collectTime: val => {
    return formatDate(val, 'yyyy-MM-dd HH:mm:ss')
  },
  contactNumber: val => {
    return val ? '+86' + val : ''
  },
  vehicleLifeStatus: {
    'PRODUCTION_WAREHOUSED': '生产已入库',
    'SALE_WAREHOUSED': '销售已入库',
    'VEHICLE_SOLD': '车辆已售出',
    'VEHICLE_ACTIVATED': '车辆已激活'
  }
}

const formatContext = (row, column, cellValue, index) => {
  if (!strategyMap[column.property]) return
  if (typeof strategyMap[column.property] === 'function') {
    return strategyMap[column.property](cellValue)
  } else {
    return strategyMap[column.property][cellValue] || cellValue
  }
}

export default formatContext
