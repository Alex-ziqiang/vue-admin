<template>
  <div>
    <Header />
    <Menu />
    <AppMain />
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: { Header, Menu, AppMain },
  data () {
    return {
    }
  }
}
</script>
