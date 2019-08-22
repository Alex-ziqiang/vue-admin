<template>
  <Dialog
    :outer-visible="outerVisible"
    title="详情"
    outer-width="40vw"
    v-on="$listeners"
  >
    <Collapse
      v-model="activeNames"
      :collapse-items="collapseItems"
      :form="form"
    />
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog'
import Collapse from '@/components/Collapse'
export default {
  name: 'OrgDetail',
  components: { Dialog, Collapse },
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeNames: ['orgDetail', 'contactDetail'],
      collapseItems: [
        {
          label: '企业信息',
          name: 'orgDetail',
          formItems: [
            { type: 'detail', label: '企业名称', value: 'name' },
            { type: 'detail', label: '企业法人', value: 'legalRepresentative' },
            { type: 'detail', label: '企业地址', value: 'address' }
          ]
        },
        {
          label: '联系人信息',
          name: 'contactDetail',
          formItems: [
            { type: 'detail', label: '企业联系人', value: 'organizationContact' },
            { type: 'detail', label: '联系人手机', value: 'contactNumber' },
            { type: 'detail', label: '联系人邮箱', value: 'contactEmail' }
          ]
        }
      ]
    }
  }
}
</script>
