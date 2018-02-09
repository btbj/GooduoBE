import Api from '@/services/Api'

export default {
  serviceURL: 'role/',
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
  roles (token) {
    return Api.create().post((this.serviceURL + 'roles'), token)
  }
}
