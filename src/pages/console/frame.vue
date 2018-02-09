<template>
  <el-container class="root">
    <f-header></f-header>
    <el-container class="f-body">
      <side-bar class="f-aside">
        <div>aside</div>
      </side-bar>
      <el-main class="f-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import FHeader from '@/pages/console/header/header'
import sideBar from '@/pages/console/sideBar'

export default {
  components: {
    FHeader, sideBar
  },
  beforeCreate: function () {
    if (!this.$store.getters.loginState) {
      this.$router.push({name: '登录页面'})
    }
  }
}
</script>

<style lang="less" scoped>
.root{
  height: 100%;
  width: 100%;
  background: white;
  flex-direction: column;
}
.f-header{
  // background: #2980b9;
}
.f-body{
  background: #ecf0f1;
  .f-main{
    padding: 0;
  }
}
</style>
