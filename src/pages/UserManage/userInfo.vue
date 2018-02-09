<template>
  <pannel title="用户信息" class="user-info-card">
    <el-card>
      <div>
        <el-form ref="form" label-width="80px" label-position="left" v-loading="loading">
          <el-form-item label="用户名">
            <div>{{user.username}}</div>
          </el-form-item>
          <el-form-item label="职位">
            <el-select v-model="user.role_id" placeholder="请选择">
              <el-option
                v-for="item in roles"
                :key="item.id"
                :label="item.name"
                :value="item.role_id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span class="error-msg" v-if="errorMsg">{{ errorMsg }}</span>
      </div>
      <div style="padding-top: 14px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button" size="small" @click="navBack">返回</el-button>
          <el-button type="primary" class="button" size="small" @click="submit">修改</el-button>
        </div>
      </div>
    </el-card>
  </pannel>
</template>

<script>
import Pannel from '@/components/Pannel'
import userService from '@/services/userService'
import roleService from '@/services/roleService'

export default {
  components: {
    Pannel
  },
  data () {
    return {
      loading: true,
      user: {
        id: '0',
        username: 'username',
        role_id: '0',
        role_name: 'role_name',
        name: ''
      },
      roles: [],
      targetRoleId: '',
      errorMsg: ''
    }
  },
  methods: {
    async getInfo (id) {
      this.loading = true
      try {
        const response = await userService.info({
          'token': this.$store.getters.token,
          'user_id': id
        })
        const jsonData = userService.handleBack(response)
        if (jsonData.success) {
          this.user = jsonData.data.info
          this.loading = false
        } else {
          userService.sErr(jsonData, this)
        }
      } catch (error) {
        userService.nErr(error, this)
      }
      this.loading = false
    },
    async getRoles () {
      this.loading = true
      try {
        const response = await roleService.roles({
          'token': this.$store.getters.token
        })
        const jsonData = roleService.handleBack(response)
        if (jsonData.success) {
          this.roles = jsonData.data.roles
        } else {
          roleService.sErr(jsonData, this)
        }
      } catch (error) {
        roleService.nErr(error, this)
      }
      this.loading = false
    },
    navBack () {
      this.$router.go(-1)
    },
    async submit () {
      this.loading = true
      const user = this.user
      try {
        const response = await userService.update({
          'token': this.$store.getters.token,
          'data': {
            id: user.id,
            username: user.username,
            role_id: user.role_id,
            name: user.name
          }
        })
        const jsonData = userService.handleBack(response)
        if (jsonData.success) {
          this.$message({
            message: jsonData.message,
            type: 'success'
          })
        } else {
          userService.sErr(jsonData, this)
        }
      } catch (error) {
        userService.nErr(error, this)
      }
      this.loading = false
    }
  },
  mounted () {
    this.getInfo(this.$route.params.id)
    this.getRoles()
  }
}
</script>

<style lang="less" scoped>
.user-info-card{
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
