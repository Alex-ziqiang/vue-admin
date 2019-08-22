<template>
  <div class="page-wrapper">
    <Tab
      v-model="activeName"
      :tabs="tabs"
    />
  </div>
</template>

<script>
import Tab from '@/components/Tab'
export default {
  name: 'Security',
  components: { Tab },
  data () {
    return {
      activeName: 'ECALL',
      tabs: [
        {
          label: 'E-Call记录',
          name: 'ECALL',
          component: () => import('./components/XCall')
        },
        {
          label: 'B-Call记录',
          name: 'BCALL',
          component: () => import('./components/XCall')
        }
      ]
    }
  }
}
</script>
