import Api from '@/services/Api'

export default {
  serviceURL: 'seller/',
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
  sellerList (token) {
    return Api.create().post((this.serviceURL + 'sellers'), token)
  },
  categories (token) {
    return Api.create().post((this.serviceURL + 'categories'), token)
  },
  deviceList (userID) {
    return Api.create().post((this.serviceURL + 'devices'), userID)
  },
  devicesNotAssigned (userID) {
    return Api.create().post((this.serviceURL + 'devices_not_assigned'), userID)
  },
  assign (Detail) {
    return Api.create().post((this.serviceURL + 'assign'), Detail)
  },
  assignCancel (Detail) {
    return Api.create().post((this.serviceURL + 'assign_cancel'), Detail)
  },
  setDeviceRoom (roomInfo) {
    return Api.create().post((this.serviceURL + 'set_device_room'), roomInfo)
  },
  getAvatarUploadUrl (sellerId) {
    return Api.serverBaseURL + this.serviceURL + 'upload_avatar?user_id=' + sellerId
  },
  changeBindInfo (info) {
    return Api.create().post((this.serviceURL + 'change_bind'), info)
  }
}
