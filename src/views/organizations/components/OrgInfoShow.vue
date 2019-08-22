<template>
  <Dialog
    class="info-dialog"
    :outer-visible="outerVisible"
    :outer-width="'80vw'"
    title="信息展示"
    v-on="$listeners"
  >
    <InfoContainer
      :active-name-arr="activeNames"
      :data="infoLayouts"
      :form-data="formData"
      :form="form"
    />
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog'
import InfoContainer from '@/components/infoShowModule/infoContainer.vue'
export default {
  name: 'OrgDetail',
  components: { Dialog, InfoContainer },
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeNames: [],
      infoLayouts: {},
      formData: {}
    }
  },
  watch: {
    form: {
      handler: function (val) {
        this.showInfoList()
      },
      deep: true
    }
  },
  methods: {
    showInfoList () {
      this.$nextTick(() => {
        this.activeNames = ['tboxData', 'ihuData']
        this.infoLayouts = {
          0: [{
            fields: 'tboxData',
            title: '远程信息处理控制器信息',
            items: 2 // 项

          }, {
            fields: 'ihuData',
            title: 'IHU信息',
            items: 2
          }],
          1: [{
            fields: 'GWData',
            title: '网关信息',
            items: 2 // 项

          }, {
            fields: 'VCUData',
            title: '整车控制器信息',
            items: 2
          }],
          2: [{
            fields: 'ICData',
            title: '仪表信息',
            items: 2 // 项

          }, {
            fields: 'PFCUData',
            title: '增程式控制器信息',
            items: 2
          }],
          3: [{
            fields: 'MCUData',
            title: '电机控制器信息',
            items: 2 // 项

          }, {
            fields: 'GCUData',
            title: '发电机控制单元信息',
            items: 2
          }],
          4: [{
            fields: 'BMSData',
            title: '电池管理单元信息',
            items: 2 // 项

          }, {
            fields: 'DCDCData',
            title: '直流变换器信息',
            items: 2
          }],
          5: [{
            fields: 'SDCACData',
            title: '助力转向系统逆变器信息',
            items: 2 // 项

          }, {
            fields: 'BDCACData',
            title: '制动系统逆变器信息',
            items: 2
          }]
        }
        this.formData = {
          'tboxData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }
          ],
          'ihuData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }
          ],
          'GWData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }
          ],
          'VCUData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'ICData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'PFCUData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'MCUData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'GCUData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'BMSData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'DCDCData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'SDCACData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
          'BDCACData': [
            {
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]
        }

        /* this.formData = {
          'tboxData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]
          ],
          'ihuData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }], [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]
          ],
          'GWData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]
          ],
          'VCUData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'ICData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'PFCUData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'MCUData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'GCUData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'BMSData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'DCDCData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'SDCACData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]],
          'BDCACData': [
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }],
            [{
              type: 'detail',
              label: '企业地址：',
              value: 'address'
            }, {
              type: 'detail',
              label: '电子邮箱：',
              value: 'contactEmail'
            }, {
              type: 'detail',
              label: '联系电话：',
              value: 'contactNumber'
            }, {
              type: 'detail',
              label: '行驶次数：',
              value: 'driverCount'
            }, {
              type: 'detail',
              label: '企业法人：',
              value: 'legalRepresentative'
            }, {
              type: 'detail',
              label: '企业名称：',
              value: 'name'
            }, {
              type: 'detail',
              label: 'orgUUID：',
              value: 'orgUUID'
            }]]
        } */
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .info-dialog  {
    .el-dialog__body {
      padding-bottom: 16px;
    }
  }

</style>
