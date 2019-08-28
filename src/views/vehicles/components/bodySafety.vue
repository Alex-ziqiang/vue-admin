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
import { formatter, filedMap, reconstructObject } from '@/utils/format'
import { safety } from '@/api/vehicle'
import Form from '@/components/Form'
import Table from '@/components/Table'
export default {
  name: 'Safety',
  components: { Form, Table },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    let reasonTypeList = reconstructObject(filedMap.reasonType)
    reasonTypeList.unshift({ label: '全部', value: '' })
    return {
      form: {},
      formItems: [
        {
          type: 'input',
          label: 'VIN',
          value: 'vin',
          clearable: true
        },
        {
          type: 'input',
          label: '驾驶员账号',
          value: 'userName',
          clearable: true
        },
        {
          type: 'input',
          label: '所属运营企业',
          value: 'orgUUID',
          clearable: true
        },
        {
          type: 'select',
          label: '告警类型',
          value: 'reasonType',
          clearable: true,
          list: reasonTypeList
        },
        {
          type: 'datetimerange',
          label: '发生时间',
          value: 'occurTime',
          clearable: true,
          span: 12
        }
      ],
      buttons: [
        { label: '查询', type: 'primary', icon: 'el-icon-search', click: this.searchSubmit },
        { label: '重置', type: 'info', click: this.reset },
        { label: '导出', type: 'success', click: this.exportData }
      ],
      tableLoading: false,
      totalCount: '',
      data: [],
      columns: [
        { label: '"告警产生时间', prop: 'collectTime', formatter },
        { label: 'VIN', prop: 'vin' },
        { label: '车牌号', prop: 'plate' },
        { label: '驾驶员账号', prop: 'userName' },
        { label: '所属运营企业', prop: 'orgName' },
        { label: '告警类型', prop: 'reasonType', formatter },
        {
          label: '地点',
          buttons: [
            { type: 'text', prop: 'theftLocation.address', click: this.handleAddress }
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
    this.handleSafetyList()
  },
  methods: {
    handleCurrentChange (val) {
      this.pagination.currentPage = val
      this.handleSafetyList()
    },
    handleSizeChange (val) {
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      this.handleSafetyList()
    },
    exportData () {
      console.log('exportData')
    },
    handleAddress () {
      console.log('click')
    },
    // 获取运营企业
    handleSafetyList () {
      this.tableLoading = true
      const params = { ...this.form, ...this.pagination }
      safety(params)
        .then(res => {
          this.tableLoading = false
          this.data = res.vehicleSafetyBeans
          this.pagination.total = res.count
        })
        .catch(() => {
          this.tableLoading = false
        })
    },
    // 搜索
    searchSubmit () {
      this.pagination.currentPage = 1
      this.handleSafetyList()
    },
    reset () {
      this.form = {}
    }
  }
}
</script>
