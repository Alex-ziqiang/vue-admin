import request from '@/utils/request'
// 查询车辆的XCall记录
export function getXcalls (params) {
  return request({
    url: '/v0/vehicles/xcall',
    params
  })
}
