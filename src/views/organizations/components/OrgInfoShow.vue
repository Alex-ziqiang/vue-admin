<template>
  <Dialog
    :outer-visible="outerVisible"
    :outer-width="'80vw'"
    title="信息展示"
    v-on="$listeners"
  >
    <InfoContainer
      :active-name-arr="activeNames"
      :data="infoLayouts"
      :form-data="formData"
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
    infoData: {
      type: Object,
      default: function () {
        return {}
      }
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
    infoData: {
      handler: function (val) {
        console.log('val********************')
        console.log(val)
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
            [{
              label: 'SN：',
              value: 'this.tbox.sn'
            }, {
              label: '硬件版本号：',
              value: 'this.tbox.hardwareVersion'
            }, {
              label: '供应商名称：',
              value: 'this.tbox.vender'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.tbox.termFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.tbox.imei'
            }, {
              label: '软件版本号：',
              value: 'this.tbox.softwareVersion'
            }, {
              label: '生产批次：',
              value: 'this.tbox.termProduceBatch'
            }]
          ],
          'ihuData': [
            [{
              label: 'SN：',
              value: 'this.ihu.sn'
            }, {
              label: '硬件版本号：',
              value: 'this.ihu.hardwareVersion'
            }, {
              label: '供应商名称：',
              value: 'this.ihu.vender'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.ihu.huFactoryDate)'
            }], [{
              label: '零件号：',
              value: 'this.ihu.imei'
            }, {
              label: '软件版本号：',
              value: 'this.ihu.softwareVersion'
            }, {
              label: '生产批次：',
              value: 'this.ihu.huProduceBatch'
            }]
          ],
          'GWData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.gwNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.gwHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.gwSupplierName'
            },
            {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.gwFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.gwCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.gwSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.gwProduceBatch'
            }]
          ],
          'VCUData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.vcuNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.vcuHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.vcuSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.vcuFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.vcuCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.vcuSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.vcuProduceBatch'
            }]],
          'ICData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.icNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.icHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.icSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.icFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.icCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.icSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.icProduceBatch'
            }]],
          'PFCUData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.pfcuNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.pfcuHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.pfcuSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.pfcuFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.pfcuCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.pfcuSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.pfcuProduceBatch'
            }]],
          'MCUData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.mcuNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.mcuHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.mcuSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.mcuFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.mcuCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.mcuSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.mcuProduceBatch'
            }]],
          'GCUData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.gcuNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.gcuHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.gcuSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.gcuFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.gcuCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.gcuSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.gcuProduceBatch'
            }]],
          'BMSData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.bmsNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.bmsHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.bmsSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.bmsFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.bmsCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.bmsSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.bmsProduceBatch'
            }]],
          'DCDCData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.dcdcNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.dcdcHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.dcdcSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.dcdcFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.dcdcCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.dcdcSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.dcdcProduceBatch'
            }]],
          'SDCACData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.sdcacNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.sdcacHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.sdcacSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.sdcacFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.sdcacCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.sdcacSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.sdcacProduceBatch'
            }]],
          'BDCACData': [
            [{
              label: '终端编号：',
              value: 'this.vehiclePartsBean.bdcacNumber'
            }, {
              label: '硬件版本号：',
              value: 'this.vehiclePartsBean.bdcacHardVersion'
            }, {
              label: '供应商名称：',
              value: 'this.vehiclePartsBean.bdcacSupplierName'
            }, {
              label: '出厂日期：',
              value: 'formatDay(this.vehiclePartsBean.bdcacFactoryDate)'
            }],
            [{
              label: '零件号：',
              value: 'this.vehiclePartsBean.bdcacCode'
            }, {
              label: '软件版本号：',
              value: 'this.vehiclePartsBean.bdcacSoftVersion'
            }, {
              label: '生产批次：',
              value: 'this.vehiclePartsBean.bdcacProduceBatch'
            }]]
        }
      })
    }
  }
}
</script>
