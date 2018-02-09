import Api from '@/services/Api'

export default {
  serviceURL: 'user/',
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
  register (credentials) {
    return Api.create().post((this.serviceURL + 'do_reg'), credentials)
  },
  login (credentials) {
    return Api.create().post((this.serviceURL + 'do_login'), credentials)
  },
  info (credentials) {
    return Api.create().post((this.serviceURL + 'info'), credentials)
  },
  delete (credentials) {
    return Api.create().post((this.serviceURL + 'do_delete'), credentials)
  },
  update (newInfo) {
    return Api.create().post((this.serviceURL + 'do_update'), newInfo)
  },
  userlist (token) {
    return Api.create().post((this.serviceURL + 'users'), token)
  }
}
