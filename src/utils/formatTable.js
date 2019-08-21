const strategyMap = {
  contactNumber: val => {
    return val ? '+86' + val : ''
  }
}

const formatContext = (row, column, cellValue, index) => {
  return strategyMap[column.property](cellValue)
}

export default formatContext
