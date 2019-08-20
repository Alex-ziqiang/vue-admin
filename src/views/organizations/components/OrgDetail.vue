<template>
  <Dialog
    :outer-visible="outerVisible"
    title="详情"
    v-on="$listeners"
  >
    <Form
      :form="form"
      :form-items="formItems"
    />
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
export default {
  name: 'OrgDetail',
  components: { Form, Dialog },
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
      formItems: [
        { type: 'detail', label: '企业名称', value: 'name' },
        { type: 'detail', label: '企业法人', value: 'legalRepresentative' },
        { type: 'detail', label: '企业联系人', value: 'organizationContact' },
        { type: 'detail', label: '联系人手机', value: 'contactNumber' },
        { type: 'detail', label: '联系人邮箱', value: 'contactEmail' },
        { type: 'detail', label: '企业地址', value: 'address' }
      ]
    }
  }
}
</script>
