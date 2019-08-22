<template>
  <el-collapse
    v-model="activeNames"
    class="info-list-show-component"
  >
    <!--v-for   最外布局 单行展示-->
    <el-row
      v-for="layoutItem in row"
      :key="layoutItem"
      :gutter="8"
      type="flex"
    >
      <!--v-for 容器内展示几项 items-->
      <el-col
        v-for="(item,index) in data[layoutItem]"
        :key="index"
        :span="getSpans(item.items)"
        class="col-detail-item col-detail-item1"
      >
        <el-collapse-item
          v-if="item.hasVif ? item.hasVif[0]: true"
          :name="item.fields"
        >
          <template slot="title">
            <div class="title">
              {{ item.title }}
            </div>
            <i :class="['iconfont', {'iconshouqi': isunfold(item.fields)}, {'iconzhankai': !isunfold(item.fields)}]" />
          </template>
          <el-form
            class="ellipsis-form"
            label-position="left"
          >
            <!--v-for 每种展示，有几列内容-->
            <el-col
              v-for="(item2,index2) in formData[item.fields]"
              v-if="formData[item.fields]"
              :key="index2"
              :span="getSpans(formData[item.fields].length)"
            >
              <!--content-->
              <FormItem :data="item2" />
            </el-col>
          </el-form>
        </el-collapse-item>
      </el-col>
    </el-row>
  </el-collapse>
</template>
<script>
import FormItem from './infoShowFormItem'
export default {
  components: { FormItem },
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    },
    formData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    activeNameArr: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      row: [],
      activeNames: []
    }
  },
  watch: {
    data: {
      handler (val) {
        this.row = Object.keys(this.data)
      },
      deep: true

    },
    activeNameArr: function () {
      this.activeNames = this.activeNameArr
    }
  },
  methods: {
    isunfold (name) {
      return this.activeNames.includes(name)
    },
    getSpans (val) {
      return 24 / val
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .info-list-show-component {
    .title {
      font-size: 14px;
      font-weight: bold;
      color: #2F70F7;
    }
    .iconfont {
      color: #AFAFAF;
    }
    .col-detail-item {
      margin-top: 8px;
    }
    .col-detail-item1 {
      margin-top: 0;
    }
    .el-form-item__label {
      white-space: nowrap;
    }
  }

</style>
