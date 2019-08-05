<template>
  <div>
    <Menu />
    <AppMain />
  </div>
</template>
<script>
import AppMain from './components/AppMain'
import Menu from './components/Menu'
export default {
  name: 'Layout',
  components: { AppMain, Menu },
  data () {
    return {
    }
  }
}
</script>
