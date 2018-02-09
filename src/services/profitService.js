import Api from '@/services/Api'

export default {
  serviceURL: 'profit/',
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
  sellerList (token) {
    return Api.create().post((this.serviceURL + 'seller_list'), token)
  },
  getSellerInfo (token) {
    return Api.create().post((this.serviceURL + 'seller_info'), token)
  },
  getSellerPayments (token) {
    return Api.create().post((this.serviceURL + 'get_seller_payments'), token)
  },
  getSellerProfitExcel (dateRange) {
    return Api.serverBaseURL + this.serviceURL + 'output_sellers?start_at=' + dateRange.start_at + '&end_at=' + dateRange.end_at
  }
}
