<template>
  <div>
    <Dialog
      type="add"
      :outer-visible="outerVisible"
      :title="title"
      v-on="$listeners"
      @submit="submit"
      @cancel="cancel"
    >
      <Form
        :ref-obj.sync="ref"
        :form="form"
        :form-items="formItems"
        :rules="rules"
      />
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
export default {
  name: 'AddEdit',
  components: { Form, Dialog },
  props: {
    title: {
      type: String,
      required: true
    },
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
      ref: null,
      formItems: [
        { type: 'input', label: '企业名称', value: 'name', clearable: true },
        { type: 'input', label: '企业法人', value: 'legalRepresentative', clearable: true },
        { type: 'input', label: '企业联系人', value: 'organizationContact', clearable: true },
        { type: 'input', label: '联系人手机', value: 'contactNumber', clearable: true },
        { type: 'input', label: '联系人邮箱', value: 'contactEmail', clearable: true },
        { type: 'input', label: '企业地址', value: 'address', clearable: true }
      ],
      rules: {
        name: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
        ],
        legalRepresentative: [
          { required: true, message: '请输入企业法人', trigger: 'blur' }
        ],
        organizationContact: [
          { required: true, message: '请输入企业联系人', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入企业地址', trigger: 'blur' }
        ],
        contactEmail: [
          { required: true, message: '请输入联系人邮箱', trigger: 'blur' }
        ],
        contactNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.ref.validate(valid => {
        if (!valid) {
          return
        }
        console.log(this.form)
      })
    },
    cancel () {
      this.ref.clearValidate()
    }
  }
}
</script>

<style>

</style>
