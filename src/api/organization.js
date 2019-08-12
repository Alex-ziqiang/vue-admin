import request from '@/utils/request'
// 查询运营企业列表
export function getOrganizations (params) {
  return request({
    url: '/v0/organizations',
    params
  })
}
