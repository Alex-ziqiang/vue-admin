import request from '@/utils/request'
// 查询运营企业列表
export function getOrganizations (params) {
  return request({
    url: '/v0/organizations',
    params
  })
}
// 新增运营企业
export function addOrganization (data) {
  return request({
    url: `/v0/organizations`,
    method: 'post',
    data
  })
}
// 修改运营企业信息
export function editOrganization (uuid, data) {
  return request({
    url: `/v0/organizations/${uuid}`,
    method: 'post',
    data
  })
}
// 删除运营企业
export function deleteOrganization (uuid) {
  return request({
    url: `/v0/organizations/${uuid}/delete`,
    method: 'post'
  })
}
