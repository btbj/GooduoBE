import Api from '@/services/Api'

export default {
  serviceURL: 'device/',
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
  deviceList (token) {
    return Api.create().post((this.serviceURL + 'devices'), token)
  },
  getDeviceQR (imei) {
    return Api.serverBaseURL + this.serviceURL + 'get_qr?imei=' + imei
  },
  getDeviceExcelOutputUrl () {
    return Api.serverBaseURL + this.serviceURL + 'output_devices'
  }
}
