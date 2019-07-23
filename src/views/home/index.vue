<template>
  <div>
    <Table
      :data="data"
      :columns="columns"
      :pagination="pagination"
      @current-change="onPagination"
      @size-change="handleSizeChange"
    >
      <el-table-column
        slot="option"
        label="操作"
      >
        <el-button
          slot-scope="{ row }"
        >
          {{ row.name }}
        </el-button>
      </el-table-column>
    </Table>
    <span>4</span>
  </div>
</template>

<script>
import Table from '@/components/Table'
export default {
  name: 'Home',
  components: { Table },
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
