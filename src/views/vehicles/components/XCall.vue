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
        :total="total"
        :columns="columns"
        :pagination="pagination"
        @pagination-change="handlePageChange"
      />
    </el-card>
  </div>
</template>

<script>
import { formatter } from '@/utils/format'
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
        pageSize: 10
      },
      total: 0
    }
  },
  created () {
    this.handleXcalls()
  },
  methods: {
    handlePageChange ({ type, val }) {
      this.pagination[type] = val
      type === 'pageSize' && (this.pagination.currentPage = 1)
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
          this.data = res.vehicleXCallList || []
          this.total = res.totalCount || 0
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
