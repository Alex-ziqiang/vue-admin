<template>
  <div>
    <Form
      :ref-obj.sync="ref"
      :form="form"
      :form-items="formItems"
      :inline="true"
      :rules="rules"
      @selectChange="selectChange"
    >
      <template slot="buttons">
        <el-button
          type="primary"
          @click="searchSubmit"
        >
          <svg-icon icon-class="loading" />
          查询
        </el-button>
      </template>
    </Form>
    <Table
      :data="data"
      :columns="columns"
      :pagination="pagination"
      @current-change="onPagination"
      @size-change="handleSizeChange"
    >
      <el-table-column
        slot="option"
        label="选项"
      >
        <el-button
          slot-scope="{ row }"
        >
          {{ row.name }}
        </el-button>
      </el-table-column>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table'
import Form from '@/components/Form'
export default {
  name: 'Home',
  components: { Table, Form },
  data () {
    return {
      columns: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' },
        { prop: 'change', label: '变化' },
        { prop: 'trend', label: '趋势' },
        { slot: 'option' },
        {
          label: '操作',
          buttons: [{
            label: '禁用',
            click: this.disableTag
          }, {
            label: '启用',
            click: this.ableTag
          }]
        }
      ],
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        change: '12%',
        trend: '10%'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        change: '-12%',
        trend: '-10%'
      }],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 2
      },
      ref: null,
      form: {},
      formItems: [
        { type: 'input', label: '账号', value: 'account', clearable: true },
        { type: 'password', label: '密码', value: 'password', clearable: true },
        { type: 'textarea', label: '备注', value: 'description', clearable: true, rows: '4', resize: 'none' },
        { type: 'inputNumber', label: '数字', value: 'number', disabled: true },
        { type: 'select', label: '角色', value: 'role', clearable: true, list: [{ label: '全部', value: '' }, { label: '超级管理员', value: 'SUPER' }, { label: '管理员', value: 'ADMIN' }] },
        { type: 'date', label: '日期', value: 'date', clearable: true },
        { type: 'datetime', label: '日期时间', value: 'datetime', clearable: true },
        { type: 'datetimerange', label: '日期时间范围', value: 'datetimerange', clearable: true },
        { type: 'slot', value: 'buttons' }
      ],
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    disableTag (row) {
      console.log(row)
    },
    ableTag (row) {
      console.log(row)
    },
    onPagination (val) {
      console.log(val)
    },
    handleSizeChange (val) {
      console.log(val)
    },
    searchSubmit () {
      console.log(this.ref)
      this.ref.validate(valid => {
        if (!valid) {
          return
        }
        console.log(this.form)
      })
    },
    selectChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
