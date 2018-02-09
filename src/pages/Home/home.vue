<template>
  <el-container
    class="home-root"
    v-loading="loading">
    <div>
      你好：{{ currentUser.username }}
    </div>
  </el-container>
</template>

<script>
import userService from '@/services/userService'

export default {
  data () {
    return {
      loading: false,
      currentUser: {
        username: ''
      }
    }
  },
  methods: {
    async getInfo () {
      this.loading = true
      try {
        const response = await userService.info({
          'token': this.$store.getters.token,
          'user_id': this.$store.getters.user.id
        })
        const jsonData = userService.handleBack(response)
        if (jsonData.success) {
          this.currentUser = jsonData.data.info
          this.loading = false
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
    this.getInfo()
  }
}
</script>

<style lang="less" scoped>
.home-root{
  padding: 2rem;
  height: 100%;
}
</style>
