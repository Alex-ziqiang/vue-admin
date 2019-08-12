<template>
  <div>
    <el-button
      type="primary"
      @click="addRow"
    >
      新增
    </el-button>
    <Table
      :loading="tableLoading"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      @current-change="onPagination"
      @size-change="handleSizeChange"
    />
    <AddEdit
      :outer-visible.sync="outerVisible"
      :title="title"
      :form="form"
    />
  </div>
</template>

<script>
import { getOrganizations } from '@/api/organization'
import Table from '@/components/Table'
import AddEdit from './components/AddEdit'
export default {
  name: 'Organization',
  components: { Table, AddEdit },
  data () {
    return {
      tableLoading: false,
      totalCount: '',
      data: [],
      columns: [
        { prop: 'name', label: '企业名称' },
        { label: '企业法人', prop: 'legalRepresentative' },
        { label: '企业联系人', prop: 'organizationContact' },
        { prop: 'contactNumber', label: '联系电话' },
        {
          label: '操作',
          buttons: [{ label: '编辑', click: this.editRow }]
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      outerVisible: false,
      title: '',
      form: {}
    }
  },
  created () {
    this.handleGetOrganizations()
  },
  methods: {
    onPagination (val) {
      console.log(val)
    },
    handleSizeChange (val) {
      console.log(val)
    },
    addRow () {
      this.outerVisible = true
      this.title = '新增'
      this.form = {}
    },
    editRow (row) {
      this.outerVisible = true
      this.title = '编辑'
      this.form = row
    },
    // 获取运营企业
    handleGetOrganizations () {
      const params = { ...this.pagination }
      this.tableLoading = true
      getOrganizations(params)
        .then(res => {
          this.tableLoading = false
          this.data = res.organizations
          this.pagination.total = res.totalCount
        })
        .catch(() => {
          this.tableLoading = false
        })
    }
  }
}
</script>
