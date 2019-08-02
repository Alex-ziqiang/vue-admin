<template>
  <div>
    <Menu :menu-list="routes" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Menu from './components/Menu'
export default {
  name: 'Layout',
  components: { Menu },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'routes'
    ])
  }
}
</script>
