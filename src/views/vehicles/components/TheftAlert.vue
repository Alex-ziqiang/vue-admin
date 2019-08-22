<template>
  <div>
    <el-card>
      <div
        slot="header"
        class="clearfix"
      >
        <span>查询</span>
      </div>
      <Form
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
  </div>
</template>

<script>
import formatter from '@/utils/formatTable.js'
import { getThefts } from '@/api/vehicle'
import Form from '@/components/Form'
import Table from '@/components/Table'
export default {
  name: 'TheftAlert',
  components: { Form, Table },
  data () {
    return {
      form: {},
      formItems: [
        {
          type: 'input',
          label: 'VIN',
          value: 'vin',
          clearable: true,
          span: 8
        },
        {
          type: 'input',
          label: '驾驶员账号',
          value: 'userName',
          clearable: true,
          span: 8
        },
        {
          type: 'input',
          label: '所属运营企业',
          value: 'orgUUID',
          clearable: true,
          span: 8
        },
        {
          type: 'datetimerange',
          label: '告警时间',
          value: 'occurTime',
          clearable: true,
          span: 12
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
        { label: '告警产生时间', prop: 'collectTime', formatter },
        { label: 'VIN', prop: 'vin' },
        { label: '车牌', prop: 'plate' },
        { label: '驾驶员账号', prop: 'userName' },
        { label: '所属运营企业', prop: 'orgName' },
        {
          label: '告警地点',
          buttons: [
            { type: 'text', prop: 'theftLocation.latitude', click: this.handleAddress }
          ]
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created () {
    this.handleThefts()
  },
  methods: {
    handleCurrentChange (val) {
      this.pagination.currentPage = val
      this.handleThefts()
    },
    handleSizeChange (val) {
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      this.handleThefts()
    },
    handleAddress () {
      console.log('click')
    },
    // 获取车辆被盗告警通知
    handleThefts () {
      this.tableLoading = true
      const params = { ...this.form, ...this.pagination }
      getThefts(params)
        .then(res => {
          this.tableLoading = false
          this.data = res.vehicleTheftBeans
          this.pagination.total = res.totalCount
        })
        .catch(() => {
          this.tableLoading = false
        })
    },
    // 搜索
    searchSubmit () {
      this.pagination.currentPage = 1
      this.handleThefts()
    },
    reset () {
      this.form = {}
    }
  }
}
</script>
