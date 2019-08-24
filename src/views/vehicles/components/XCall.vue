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
import formatter from '@/utils/formatTable'
import { getXcalls } from '@/api/vehicle'
import Form from '@/components/Form'
import Table from '@/components/Table'
export default {
  name: 'XCall',
  components: { Form, Table },
  props: {
    name: {
      type: String,
      required: true
    }
  },
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
          label: '发生时间',
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
        { label: '时间', prop: 'collectTime', formatter },
        { label: 'VIN', prop: 'vin' },
        { label: '车牌', prop: 'plate' },
        { label: '驾驶员账号', prop: 'userName' },
        { label: '所属运营企业', prop: 'orgName' },
        {
          label: '地点',
          buttons: [
            { type: 'text', prop: 'gps.latitude', click: this.handleAddress }
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
    this.handleXcalls()
  },
  methods: {
    handleCurrentChange (val) {
      this.pagination.currentPage = val
      this.handleXcalls()
    },
    handleSizeChange (val) {
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      this.handleXcalls()
    },
    handleAddress () {
      console.log('click')
    },
    // 获取运营企业
    handleXcalls () {
      this.tableLoading = true
      const params = { callType: this.name, ...this.form, ...this.pagination }
      getXcalls(params)
        .then(res => {
          this.tableLoading = false
          this.data = res.vehicleXCallList
          this.pagination.total = res.totalCount
        })
        .catch(() => {
          this.tableLoading = false
        })
    },
    // 搜索
    searchSubmit () {
      this.pagination.currentPage = 1
      this.handleXcalls()
    },
    reset () {
      this.form = {}
    }
  }
}
</script>
