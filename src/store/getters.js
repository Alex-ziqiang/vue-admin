const getters = {
  loading: state => state.global.loading,
  isCollapse: state => state.global.isCollapse,
  operatorBean: state => state.manager.operatorBean,
  routes: state => state.manager.routes
}
export default getters
