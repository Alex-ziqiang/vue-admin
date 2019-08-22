import dayjs from 'dayjs'
const strategyMap = {
  collectTime: val => {
    return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
  },
  contactNumber: val => {
    return val ? '+86' + val : ''
  }
}

const formatContext = (row, column, cellValue, index) => {
  return strategyMap[column.property](cellValue)
}

export default formatContext
