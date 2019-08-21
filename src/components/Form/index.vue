<template>
  <!-- layout布局 -->
  <el-row
    justify="center"
    type="flex"
  >
    <el-col :span="24">
      <el-form
        ref="form"
        class="form"
        v-bind="$attrs"
        :model="form"
        :rules="rules"
        :inline="inline"
        :label-width="labelWidth"
      >
        <el-row :gutter="20">
          <el-col
            v-for="item in formItems"
            :key="item.label"
            :md="inline ? item.span || 6 : 24"
            :xs="24"
          >
            <el-form-item
              :prop="item.value"
              :label="item.label"
              :class="item.className"
            >
              <!-- solt -->
              <template v-if="item.type === 'slot'">
                <slot :name="item.value" />
              </template>
              <!-- 详情项 -->
              <span v-if="item.type === 'detail'">
                {{ form[item.value] }}
              </span>
              <!-- 普通输入框 -->
              <el-input
                v-if="item.type === 'input' || item.type === 'password'"
                v-model.trim="form[item.value]"
                v-bind="item"
                :placeholder="getPlaceholder(item)"
              />
              <!-- 文本输入框 -->
              <el-input
                v-if="item.type === 'textarea'"
                v-model.trim="form[item.value]"
                v-bind="item"
                :placeholder="getPlaceholder(item)"
              />
              <!-- 计数器 -->
              <el-input-number
                v-if="item.type === 'inputNumber'"
                v-model="form[item.value]"
                v-bind="item"
                :placeholder="getPlaceholder(item)"
              />
              <!-- 选择框 -->
              <el-select
                v-if="item.type === 'select'"
                v-model="form[item.value]"
                v-bind="item"
                :placeholder="getPlaceholder(item)"
                @change="item.change(form[item.value])"
              >
                <el-option
                  v-for="childItem in item.list"
                  :key="childItem.label"
                  :label="childItem.label"
                  :value="childItem.value"
                />
              </el-select>
              <!-- 日期选择框 -->
              <el-date-picker
                v-if="item.type === 'date'"
                v-model="form[item.value]"
                :value-format="valueFormat"
                v-bind="item"
                :placeholder="getPlaceholder(item)"
              />
              <!-- 日期时间选择框 -->
              <el-date-picker
                v-if="item.type === 'datetime'"
                v-model="form[item.value]"
                :value-format="valueFormat"
                v-bind="item"
                :placeholder="getPlaceholder(item)"
              />
              <!-- 日期时间范围选择框 -->
              <el-date-picker
                v-if="item.type === 'datetimerange'"
                v-model="form[item.value]"
                :value-format="valueFormat"
                v-bind="item"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
            </el-form-item>
            <!-- 按钮 -->
          </el-col>
        </el-row>
        <div
          v-if="buttons.length !== 0"
          class="button-wrapper"
        >
          <el-button
            v-for="button in buttons"
            :key="button.label"
            v-bind="button"
            @click="button.click"
          >
            {{ button.label }}
          </el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Form',
  props: {
    form: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    formItems: {
      type: Array,
      required: true
    },
    buttons: {
      type: Array,
      default: () => {
        return []
      }
    },
    valueFormat: {
      type: String,
      default: 'timestamp'
    },
    refObj: {
      type: Object,
      default: null
    }
  },
  watch: {
    form: {
      handler () {
        this.$emit('update:refObj', this.$refs['form'])
      },
      deep: true
    }
  },
  mounted () {
    this.$emit('update:refObj', this.$refs['form'])
  },
  methods: {
    getPlaceholder (row) {
      let placeholder
      if (row.type === 'input' || row.type === 'textarea' || row.type === 'inputNumber') {
        placeholder = '请输入' + row.label
      } else if (row.type === 'select' || row.type === 'data' || row.type === 'datetime') {
        placeholder = '请选择' + row.label
      } else {
        placeholder = row.label
      }
      return placeholder
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  float: right;
}
</style>
