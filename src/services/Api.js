import axios from 'axios'
import config from '@/config'

export default {
  serverBaseURL: config.serverBaseURL,
  create () {
    return axios.create({
      baseURL: this.serverBaseURL
    })
  },
  // API处理response
  handleBack (response) {
    let jsonData = response.data
    return jsonData
  },
  // API基础错误处理方式
  handleServerError (jsonData, vm) {
    if (jsonData.success) {
      console.error('回包没有失败: ', jsonData)
      return false
    }
    const errcode = jsonData.error_code
    if (!errcode) {
      console.error('错误信息没有错误码: ', jsonData)
      return false
    }
    // token已过期
    if (errcode === 101) {
      vm.$alert('登录信息已过期', '请重新登录', {
        confirmButtonText: '确定',
        callback: () => {
          vm.$router.push({name: '登录页面'})
        }
      })
      return false
    }
    // token不存在
    if (errcode === 110) {
      vm.$alert('登录信息已失效', '请重新登录', {
        confirmButtonText: '确定',
        callback: () => {
          vm.$router.push({name: '登录页面'})
        }
      })
      return false
    }
    // 没有预存的错误，则返回原数据包，交给具体Service内部处理
    return jsonData
  },
  // API处理网络错误
  handleNetError (error, vm) {
    console.log('网络异常', error)
    vm.$message.error('网络异常')
  }
}
