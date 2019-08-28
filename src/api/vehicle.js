import request from '@/utils/request'
// 查询车辆静态信息详情
export function getVehicle (uuid) {
  return request({
    url: `/v0/vehicles/${uuid}`
  })
}
// 查询车辆
export function getVehicles (params) {
  return request({
    url: '/v0/vehicles',
    params
  })
}
// 查询车辆被盗告警通知
export function getThefts (params) {
  return request({
    url: '/v0/vehicles/theft',
    params
  })
}
// 查询车辆的XCall记录
export function getXcalls (params) {
  return request({
    url: '/v0/vehicles/xcall',
    params
  })
}

/* 车身安全 查询 */
export function safety (params) {
  return request({
    url: `/v0/vehicles/safety`,
    method: 'get',
    params
  })
}
