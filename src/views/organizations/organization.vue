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
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
    <AddEdit
      :type="type"
      :outer-visible.sync="outerVisible"
      :form="form"
      @refresh="handleOrganizations"
    />
  </div>
</template>

<script>
import { getOrganizations, deleteOrganization } from '@/api/organization'
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
          buttons: [{ label: '编辑', click: this.editRow }, { label: '删除', click: this.deleteRow }]
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      outerVisible: false,
      type: '',
      form: {}
    }
  },
  created () {
    this.handleOrganizations()
  },
  methods: {
    handleCurrentChange (val) {
      this.pagination.currentPage = val
      this.handleOrganizations()
    },
    handleSizeChange (val) {
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      this.handleOrganizations()
    },
    addRow () {
      this.outerVisible = true
      this.type = 'add'
    },
    editRow (row) {
      this.outerVisible = true
      this.type = 'edit'
      this.form = row
    },
    deleteRow (row) {
      this.$confirm('确定删除该企业吗？', {
        type: 'warning',
        showClose: false,
        closeOnClickModal: false
      }).then(() => {
        deleteOrganization(row.orgUUID).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          // 刷新列表
          this.handleOrganizations()
        })
      }).catch(err => console.log(err))
    },
    // 获取运营企业
    handleOrganizations () {
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
