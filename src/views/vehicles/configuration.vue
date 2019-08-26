<template>
  <div class="page-wrapper">
    <el-card>
      <div
        slot="header"
        class="clearfix"
      >
        <span>查询</span>
      </div>
      <Form
        label-width="auto"
        :form="form"
        :form-items="formItems"
        :inline="true"
        :buttons="buttons"
      />
    </el-card>
    <el-card>
      <Table
        :loading="tableLoading"
        :data="data"
        :columns="columns"
        :pagination="pagination"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </el-card>
    <VehicleDetail
      :outer-visible.sync="detailVisible"
      :uuid="uuid"
    />
  </div>
</template>

<script>
import formatter from '@/utils/formatTable'
import { getVehicles } from '@/api/vehicle'
import Form from '@/components/Form'
import Table from '@/components/Table'
import VehicleDetail from './components/VehicleDetail'
export default {
  name: 'Configuration',
  components: { Form, Table, VehicleDetail },
  data () {
    return {
      form: {
        vehicleLifeStatus: ''
      },
      formItems: [
        {
          type: 'input',
          label: 'VIN',
          value: 'vin',
          clearable: true
        },
        {
          type: 'input',
          label: '远程信息处理控制器 SN',
          value: 'tboxSn',
          clearable: true
        },
        {
          type: 'input',
          label: 'IHU SN',
          value: 'ihuSn',
          clearable: true
        },
        {
          type: 'input',
          label: 'ICCID',
          value: 'iccid',
          clearable: true
        },
        {
          type: 'input',
          label: '所属运营企业',
          value: 'orgUUID',
          clearable: true
        },
        {
          type: 'input',
          label: '车型',
          value: 'vehicleModelUUID',
          clearable: true
        },
        {
          type: 'select',
          label: '车辆状态',
          value: 'vehicleLifeStatus',
          list: [
            { label: '全部', value: '' },
            { label: '生产已入库', value: 'PRODUCTION_WAREHOUSED' },
            { label: '销售已入库', value: 'SALE_WAREHOUSED' },
            { label: '车辆已售出', value: 'VEHICLE_SOLD' },
            { label: '车辆已激活', value: 'VEHICLE_ACTIVATED' }
          ]
        }
      ],
      buttons: [
        { label: '查询', type: 'primary', icon: 'el-icon-search', click: this.searchSubmit },
        { label: '重置', type: 'info', click: this.reset }
      ],
      tableLoading: false,
      totalCount: '',
      data: [],
      columns: [
        {
          label: 'VIN',
          buttons: [
            { type: 'text', prop: 'vin', click: this.handleDetail }
          ]
        },
        { label: '远程信息处理控制器 SN', prop: 'tbox.sn' },
        { label: 'IHU SN', prop: 'ihu.sn' },
        { label: 'ICCID', prop: 'tbox.simcard.iccid' },
        { label: '车型', prop: 'model.name' },
        { label: '车辆状态', prop: 'vehicleLifeStatus', formatter },
        { label: '所属运营企业', prop: 'organizationBean.name' }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      detailVisible: false,
      uuid: ''
    }
  },
  created () {
    this.handleVehicles()
  },
  methods: {
    handleCurrentChange (val) {
      this.pagination.currentPage = val
      this.handleVehicles()
    },
    handleSizeChange (val) {
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      this.handleVehicles()
    },
    handleDetail (row) {
      this.detailVisible = true
      this.uuid = row.vehicleUUID
    },
    // 获取车辆被盗告警通知
    handleVehicles () {
      this.tableLoading = true
      const params = { ...this.form, ...this.pagination }
      getVehicles(params)
        .then(res => {
          this.tableLoading = false
          this.data = res.vehicles
          this.pagination.total = res.totalCount
        })
        .catch(() => {
          this.tableLoading = false
        })
    },
    // 搜索
    searchSubmit () {
      this.pagination.currentPage = 1
      this.handleVehicles()
    },
    reset () {
      this.form = {
        vehicleLifeStatus: ''
      }
    }
  }
}
</script>
