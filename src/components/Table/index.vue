<template>
  <el-table
    v-loading="loading"
    v-bind="$attrs"
    :data="data"
    v-on="$listeners"
  >
    <template v-for="(column, index) in columns">
      <slot
        v-if="column.slot"
        :name="column.slot"
      />
      <el-table-column
        v-if="column.operations"
        :key="index"
        v-bind="column"
      >
        <template v-slot="{ row }">
          <el-button
            v-for="(operation, number) in column.operations"
            :key="number"
            v-bind="operation"
            @click="operation.click(row)"
          >
            {{ operation.label }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="index"
        v-bind="column"
        :show-overflow-tooltip="true"
      />
    </template>
  </el-table>
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
    }
  }
}
</script>
