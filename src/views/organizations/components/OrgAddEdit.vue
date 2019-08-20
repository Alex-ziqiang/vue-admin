<template>
  <Dialog
    :type="type"
    :outer-visible="outerVisible"
    :title="titleMap[type]"
    v-on="$listeners"
    @submit="submit"
    @cancel="cancel"
    @outerOpen="outerOpen"
  >
    <Form
      :ref-obj.sync="ref"
      :form="currentForm"
      :form-items="formItems"
      :rules="rules"
    />
  </Dialog>
</template>

<script>
import { addOrganization, editOrganization } from '@/api/organization'
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
export default {
  name: 'OrgAddEdit',
  components: { Form, Dialog },
  props: {
    type: {
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
      uuid: '',
      ref: null,
      currentForm: {},
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
      },
      titleMap: {
        add: '新增',
        edit: '编辑'
      }
    }
  },
  methods: {
    outerOpen () {
      if (this.type === 'add') {
        this.currentForm = {}
      } else if (this.type === 'edit') {
        const {
          name,
          contactEmail,
          address,
          contactNumber,
          legalRepresentative,
          organizationContact
        } = this.form
        this.uuid = this.form.orgUUID
        this.currentForm = {
          name,
          contactEmail,
          address,
          contactNumber,
          legalRepresentative,
          organizationContact
        }
      }
    },
    refresh () {
      this.$emit('refresh')
    },
    submit () {
      this.ref.validate(valid => {
        if (!valid) {
          return
        }
        if (this.type === 'add') {
          addOrganization(this.currentForm).then(() => {
            this.$message({
              type: 'success',
              showClose: true,
              message: '新增成功'
            })
            this.refresh()
          }).catch(err => console.log(err))
        } else if (this.type === 'edit') {
          editOrganization(this.uuid, this.currentForm).then(() => {
            this.$message({
              type: 'success',
              showClose: true,
              message: '编辑成功'
            })
            this.refresh()
          }).catch(err => console.log(err))
        }
      })
    },
    cancel () {
      this.ref.clearValidate()
    }
  }
}
</script>
