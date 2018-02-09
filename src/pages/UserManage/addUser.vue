<template>
  <pannel title="添加用户" class="add-user-card">
    <el-card>
      <div>
        <span>用户名</span>
        <el-input placeholder="请输入用户名" v-model="newUser.username"></el-input>
        <span>密码</span>
        <el-input placeholder="请输入密码" type="password" v-model="newUser.password"></el-input>
        <span class="error-msg" v-if="errorMsg">{{ errorMsg }}</span>
      </div>
      <div style="padding-top: 14px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button" size="small" @click="navBack">返回</el-button>
          <el-button type="primary" class="button" size="small" @click="addNew">提交</el-button>
        </div>
      </div>
    </el-card>
  </pannel>
</template>

<script>
import Pannel from '@/components/Pannel'
import userService from '@/services/userService'

export default {
  components: {
    Pannel
  },
  data () {
    return {
      newUser: {
        username: '',
        password: ''
      },
      errorMsg: ''
    }
  },
  methods: {
    navBack () {
      this.$router.go(-1)
    },
    async addNew () {
      let info = this.newUser
      this.errorMsg = ''
      if (info.username === '' || info.password === '') {
        return false
      }
      try {
        const response = await userService.register({
          'token': this.$store.getters.token,
          'username': info.username,
          'password': info.password
        })
        const jsonData = userService.handleBack(response)
        if (jsonData.success) {
          this.$message({
            message: jsonData.message,
            type: 'success'
          })
          setTimeout(() => {
            this.$router.go(-1)
          }, 1000)
        } else {
          userService.sErr(jsonData, this)
        }
      } catch (error) {
        userService.nErr(error, this)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.add-user-card{
  .el-card{
    width: 80%;
    margin: 25px auto;
  }
  .el-input{
    margin: 15px 0;
  }
  .error-msg{
    background: rgba(110,110,110,.2);
    padding: 2px 15px;
    color: #e74c3c;
    border-radius: 5px;
  }
}
</style>
