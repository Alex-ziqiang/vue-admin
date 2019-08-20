<template>
  <div>
    <Form
      :form="form"
      :form-items="formItems"
      :inline="true"
      :buttons="buttons"
    />
    <Table
      :loading="tableLoading"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
    <OrgAddEdit
      :type="type"
      :outer-visible.sync="outerVisible"
      :form="addEditForm"
      @refresh="refresh"
    />
  </div>
</template>

<script>
import { getOrganizations, deleteOrganization } from '@/api/organization'
import Form from '@/components/Form'
import Table from '@/components/Table'
import OrgAddEdit from './components/OrgAddEdit'
export default {
  name: 'Organization',
  components: { Form, Table, OrgAddEdit },
  data () {
    return {
      form: {},
      formItems: [
        {
          type: 'input',
          label: '企业名称',
          value: 'name',
          clearable: true
        },
        {
          type: 'input',
          label: '企业法人',
          value: 'legalRepresentative',
          clearable: true
        },
        {
          type: 'input',
          label: '企业联系人',
          value: 'organizationContact',
          clearable: true
        },
        {
          type: 'input',
          label: '联系人电话',
          value: 'contactNumber',
          clearable: true
        }
      ],
      buttons: [
        { label: '查询', type: 'primary', click: this.searchSubmit },
        { label: '重置', type: 'info', click: this.reset },
        { label: '新增', type: 'success', click: this.addRow }
      ],
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
          buttons: [
            { label: '编辑', click: this.editRow },
            { label: '删除', click: this.deleteRow }
          ]
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      outerVisible: false,
      type: '',
      addEditForm: {}
    }
  },
  created () {
    this.handleOrganizations()
  },
  methods: {
    refresh () {
      this.outerVisible = false
      this.handleOrganizations()
    },
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
      this.addEditForm = row
    },
    deleteRow (row) {
      this.$confirm('确定删除该企业吗？', {
        type: 'warning',
        showClose: false,
        closeOnClickModal: false
      })
        .then(() => {
          deleteOrganization(row.orgUUID).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            // 刷新列表
            this.handleOrganizations()
          })
        })
        .catch(err => console.log(err))
    },
    // 获取运营企业
    handleOrganizations () {
      const params = { ...this.form, ...this.pagination }
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
    },
    // 搜索
    searchSubmit () {
      this.pagination.currentPage = 1
      this.handleOrganizations()
    },
    reset () {
      this.form = {}
    }
  }
}
</script>
