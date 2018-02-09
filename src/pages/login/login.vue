<template>
  <div class="root">
    <div class="container">
      <div class="img-wrapper"><img src="../../assets/images/logo/gooduo.jpg" alt=""></div>
      <div class="input-wrapper">
        <el-input v-model="loginInfo.username" placeholder="用户名"></el-input>
        <el-input v-model="loginInfo.password" placeholder="密码" type="password"></el-input>
      </div>
      <div class="btn-wrapper">
        <el-button type="primary"
          :loading="loading"
          @click="login"> 登录 </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      loading: false,
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      this.loading = true
      try {
        const response = await userService.login({
          username: this.loginInfo.username,
          password: this.loginInfo.password
        })
        const jsonData = userService.handleBack(response)
        if (jsonData.success) {
          this.errorMsg = ''
          this.$store.dispatch('setToken', jsonData.data.token)
          this.$store.dispatch('setUser', jsonData.data.user)
          this.$router.push('/')
        } else {
          userService.sErr(jsonData, this)
        }
      } catch (error) {
        userService.nErr(error, this)
      }
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.root{
  height: 100%;
  width: 100%;
  position: relative;
  text-align: center;
  background: #2980b9;
  .container{
    width: 50%;
    position: absolute;
    top: 20%;
    left: 25%;
    padding: 50px 0;
    background: #2980b9;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-wrapper{
      width: 150px;
      height: 150px;
      border: 1px solid white;
      margin: 10px 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .input-wrapper{
      width: 50%;
      .el-input{
        margin: 5px 0;
      }
    }
    .btn-wrapper{
      width: 40%;
      margin-top: 20px;
      text-align: center;
      .el-button{
        width: 50%;
      }
    }
  }
}
</style>
