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
          <FormDom
            :form="form"
            :form-items="formData[item.fields]"
          />
        </el-collapse-item>
      </el-col>
    </el-row>
  </el-collapse>
</template>
<script>
import FormDom from '@/components/Form/index'
export default {
  components: { FormDom },
  props: {
    data: {
      type: Object,
      default: function () {
        return {}
      }
    },
    form: {
      type: Object,
      required: true
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
    .el-row {
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
    }
    .el-collapse-item__header {
      position: relative;
      background: #F9FAFB;
      padding: 0 24px;
      border-top: 1px solid #E5E6E9;
      .iconshouqi,.iconzhankai {
        position: absolute;
        right: 24px;
      }
      .el-collapse-item__arrow {
        display: none;
      }
    }
    .el-form-item {
      white-space: nowrap;
    }
    .el-form-item__content {
      display: flex;
      span {
        flex:1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .info-dialog  {
     .el-dialog__body {
      padding-bottom: 16px;
    }
  }

</style>
