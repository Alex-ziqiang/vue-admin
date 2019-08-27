<template>
  <Dialog
    :outer-visible="outerVisible"
    title="账号信息"
    width="30vw"
    v-on="$listeners"
  >
    <Form
      :form="operatorBean"
      :form-items="formItems"
    />
  </Dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from '@/components/Form'
import Dialog from '@/components/Dialog'
import { formatFiled } from '@/utils/formatFiled'
export default {
  name: 'UserInfo',
  components: { Form, Dialog },
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      formItems: [
        { label: '账号', value: 'userName' },
        { label: '角色', value: 'roleType', formatFiled },
        { label: '手机号码', value: 'mobile' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'operatorBean'
    ])
  }
}
</script>
