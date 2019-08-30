/**
 * 用于生成uuid
 * @param{null}
 */

export const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
export const guid = () => {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

/**
 * trim 去掉字符串前后空格
 * @param {string} str
 * @return object
 */
export const trim = (obj = {}) => {
  let temp = obj
  for (let i in temp) {
    if (typeof temp[i] === 'string') {
      temp[i] = temp[i].replace(/(^\s*)|(\s*$)/g, '')
    }
  }
  return temp
}

/**
 * isEmptyObj 判断对象是否为空对象
 * @param {object} obj
 * @return boolean
 */
export const isEmptyObj = (obj) => (JSON.stringify(obj) === '{}')

export const exportUrl = (url, formData = {}, extra = {}) => {
  if (!url && url.indexOf('/') !== -1) throw new Error('please give me a right export API')
}

/**
 * rebuildObj 对象去掉空属性和前后空格
 * @param {object} obj
 * @return object
 */
export const rebuildObj = (obj = {}) => {
  let temp = obj
  for (let i in temp) {
    // 删除空属性
    if (temp[i] === '' || temp[i] == null || isEmptyObj(temp[i]) || (Array.isArray(temp[i]) && !temp[i].length)) {
      delete temp[i]
    }
    // 去除前后空格
    if (typeof temp[i] === 'string') {
      temp[i] = temp[i].replace(/(^\s*)|(\s*$)/g, '')
    }
  }
  return temp
}
/**
 * legitimacy 判断http请求参数里是否包含 & 字符
 * @param {object} obj
 * @return object
 */
export const legitimacy = (obj = {}) => {
  let temp = obj
  for (let i in temp) {
    if ((temp[i] + '').indexOf('&') !== -1) return false
  }
  return true
}

/**
 * omit 对象去掉属性
 * @param {object} obj
 * @return object
 */
export const omit = (obj, uselessKeys) => {
  uselessKeys.forEach(key => {
    delete obj[key]
  })
  return obj
}

/**
 *
 * 对象数组根据指定属性排序(属性值仅限数字)
 *
 * @Author   liwenqiang
 * @DateTime 2018-08-09
 * @param    {[string]}   prop [属性]
 * @return   {[type]}        [description]
 */
export const compare = (prop, up = true) => {
  return function (obj1, obj2) {
    const value1 = obj1[prop]
    const value2 = obj2[prop]
    let temp
    if (up) {
      temp = value1 - value2 // 升序
    } else {
      temp = value2 - value1 // 降序
    }
    return temp
  }
}

/**
 * 格式化数字，小数位数，单位转换
 * @param val 值
 * @param n 保留的小数位数
 * @param ratio 被除数
 * @returns {Function}
 * @constructor
 */
export const formatNumber = (val, ratio = 1, n = 2) => {
  // 不是number类型 或 转成 number类型为 NaN
  if (isNaN(val - 0) || val == null) { return val }
  return ((val - 0) / ratio).toFixed(n)
}

export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true

  if (typeof val === 'boolean') return false

  if (typeof val === 'number') return !val

  if (val instanceof Error) return val.message === ''

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }

  return false
}
export const getRowIdentity = (row, rowKey) => {
  if (!row) throw new Error('row is required when get row identity')
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey]
    }
    let key = rowKey.split('.')
    let current = row
    for (let i = 0; i < key.length; i++) {
      current = current[key[i]]
    }
    return current
  } else if (typeof rowKey === 'function') {
    // eslint-disable-next-line no-useless-call
    return rowKey.call(null, row)
  }
}
export const getValueByPath = function (object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}
