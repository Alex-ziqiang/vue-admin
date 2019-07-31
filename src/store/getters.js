const getters = {
  loading: state => state.global.loading,
  operatorBean: state => state.manager.operatorBean,
  isCollapse: state => state.global.isCollapse,
  routes: state => state.global.routes
}
export default getters
