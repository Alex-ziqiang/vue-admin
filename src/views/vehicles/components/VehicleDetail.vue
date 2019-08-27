<template>
  <Dialog
    :outer-visible="outerVisible"
    title="车辆详情"
    width="80vw"
    top="10vh"
    v-on="$listeners"
    @outerOpen="outerOpen"
  >
    <Collapse
      v-model="activeNames"
      v-loading="loading"
      :collapse-items="collapseItems"
      :form="form"
    />
  </Dialog>
</template>

<script>
import { formatFiled } from '@/utils/format'
import { getVehicle } from '@/api/vehicle'
import Dialog from '@/components/Dialog'
import Collapse from '@/components/Collapse'
export default {
  name: 'OrgDetail',
  components: { Dialog, Collapse },
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    },
    uuid: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      form: {},
      activeNames: ['basicData', 'partData', 'dealerData', 'organizationData'],
      collapseItems: [
        {
          label: '车辆基础信息',
          name: 'basicData',
          formItems: [
            { label: 'VIN：', value: 'vin' },
            { label: '车辆类型：', value: 'vehType', formatFiled },
            { label: '车辆型号：', value: 'model.name' },
            { label: '二类底盘：', value: 'classTwoBaseplate', formatFiled },
            { label: '生产批次：', value: 'produceBatch' },
            { label: '生产日期：', value: 'produceDate', formatFiled },
            { label: '车辆名称：', value: 'vehName' },
            { label: '车辆品牌：', value: 'model.brandName' },
            { label: '车辆颜色：', value: 'color' },
            { label: '生产企业：', value: 'model.manufactoryName' },
            { label: '车辆合格证编号：', value: 'vehCertificateNumber' },
            { label: '出厂日期：', value: 'factoryDate', formatFiled }
          ]
        },
        {
          label: '车辆关键零件信息',
          name: 'partData',
          formItems: [
            { label: '电池包编号：', value: 'batteryBatchCode' },
            { label: '驱动装置编号：', value: 'driveDeviceCode' },
            { label: '发电装置编号：', value: 'generatorCode' },
            { label: 'MSISDN：', value: 'tbox.simcard.phoneNumber' },
            { label: 'IMSI：', value: 'tbox.simcard.imsi' },
            { label: 'IHU SN：', value: 'ihu.sn' },
            { label: '电池包型号：', value: 'batteryBatchType' },
            { label: '驱动装置型号：', value: 'driveDeviceType' },
            { label: '发电装置型号：', value: 'generatorType' },
            { label: 'ICCID：', value: 'tbox.simcard.iccid' },
            { label: '远程信息处理控制器 SN：', value: 'tbox.sn' }
          ]
        },
        {
          label: '车辆销售信息',
          name: 'dealerData',
          formItems: [
            { label: '所属运营企业：', value: 'organizationBean.name' },
            { label: '销售区域：', value: 'saleArea' },
            { label: '销售时间：', value: 'purchaseDate' }
          ]
        },
        {
          label: '企业用户信息',
          name: 'organizationData',
          formItems: [
            { label: '单位名称：', value: 'organizationBean.name' },
            { label: '单位地址：', value: 'organizationBean.address' },
            { label: '单位联系人姓名：', value: 'organizationBean.legalRepresentative' },
            { label: '统一社会信息代码：', value: 'organizationBean.owerCredentials' },
            { label: '联系电话：', value: 'organizationBean.organizationContact' },
            { label: '单位联系人手机号：', value: 'organizationBean.contactNumber' }
          ]
        }
      ]
    }
  },
  methods: {
    outerOpen () {
      this.handleVehicleDetail()
    },
    handleVehicleDetail () {
      this.loading = true
      const uuid = this.uuid
      getVehicle(uuid)
        .then(res => {
          this.loading = false
          this.form = res.vehicleBean
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
