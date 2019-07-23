<template>
  <div
    v-loading="loading"
    class="table"
  >
    <div class="table-body">
      <el-table
        v-bind="$attrs"
        :data="data"
        v-on="$listeners"
      >
        <template v-for="(column, index) in columns">
          <slot
            v-if="column.slot && !column.hidden"
            :name="column.slot"
          />
          <el-table-column
            v-if="column.buttons && !column.hidden"
            :key="index"
            v-bind="column"
          >
            <template v-slot="{row}">
              <el-button
                v-for="(button, number) in column.buttons.filter(button => !button.hidden)"
                :key="number"
                v-bind="button"
                @click="button.click(row)"
              >
                {{ button.label }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            v-else-if="!column.hidden"
            :key="index"
            v-bind="column"
            :hidden-overflow-tooltip="true"
          />
        </template>
      </el-table>
    </div>
    <div
      v-if="pagination"
      class="table-pagination"
    >
      <el-pagination
        :layout="layout"
        v-bind="pagination"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object,
      default: null
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  }
}
</script>
