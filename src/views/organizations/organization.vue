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
    <OrgDetail
      :outer-visible.sync="detailVisible"
      :form="detailForm"
    />
    <OrgAddEdit
      :type="type"
      :outer-visible.sync="addEditVisible"
      :form="addEditForm"
      @refresh="refresh"
    />
  </div>
</template>

<script>
import formatter from '@/utils/formatTable'
import { getOrganizations, deleteOrganization } from '@/api/organization'
import Form from '@/components/Form'
import Table from '@/components/Table'
import OrgDetail from './components/OrgDetail'
import OrgAddEdit from './components/OrgAddEdit'
export default {
  name: 'Organization',
  components: { Form, Table, OrgDetail, OrgAddEdit },
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
        { label: '查询', type: 'primary', icon: 'el-icon-search', click: this.searchSubmit },
        { label: '重置', type: 'info', click: this.reset },
        { label: '新增', type: 'success', icon: 'el-icon-plus', click: this.handleAdd }
      ],
      tableLoading: false,
      totalCount: '',
      data: [],
      columns: [
        {
          label: '企业名称',
          buttons: [
            { type: 'text', prop: 'name', click: this.handleDetail }
          ]
        },
        { label: '企业法人', prop: 'legalRepresentative' },
        { label: '企业联系人', prop: 'organizationContact' },
        { label: '联系电话', prop: 'contactNumber', formatter },
        {
          label: '操作',
          buttons: [
            { type: 'text', label: '编辑', click: this.handleEdit },
            { type: 'text', label: '删除', click: this.handleDelete }
          ]
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      type: '',
      addEditVisible: false,
      addEditForm: {},
      detailVisible: false,
      detailForm: {}
    }
  },
  created () {
    this.handleOrganizations()
  },
  methods: {
    refresh () {
      this.addEditVisible = false
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
    handleAdd () {
      this.addEditVisible = true
      this.type = 'add'
    },
    handleDetail (row) {
      this.detailVisible = true
      this.detailForm = row
    },
    handleEdit (row) {
      this.addEditVisible = true
      this.type = 'edit'
      this.addEditForm = row
    },
    handleDelete (row) {
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
      this.tableLoading = true
      const params = { ...this.form, ...this.pagination }
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
