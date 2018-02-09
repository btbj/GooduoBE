import Api from '@/services/Api'

export default {
  serviceURL: 'product/',
  handleBack (backData) {
    return Api.handleBack(backData)
  },
  sErr (backData, vm) {
    const data = Api.handleServerError(backData, vm)
    if (data) {
      vm.$message.error(data.message)
    }
  },
  nErr (backData, vm) {
    Api.handleNetError(backData, vm)
  },
  info (credentials) {
    return Api.create().post((this.serviceURL + 'info'), credentials)
  },
  create (credentials) {
    return Api.create().post((this.serviceURL + 'do_create'), credentials)
  },
  update (newInfo) {
    return Api.create().post((this.serviceURL + 'do_update'), newInfo)
  },
  productList (token) {
    return Api.create().post((this.serviceURL + 'products'), token)
  }
}
