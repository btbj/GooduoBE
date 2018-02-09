<template>
  <el-header class="root" height="80px">
    <div class="left-part">
      <b class="logo-text">Gooduo.net</b>
    </div>
    <div class="right-part">
      <div class="user-info">
        <div class="avatar"><img src="./imgs/avatar.png" alt=""></div>
        <div class="user-detail">
          <div class="user-name">{{ user.username }}</div>
          <div class="user-level">{{ user.role_name }}</div>
        </div>
      </div>
      <div class="action">
        <span class="logout" @click="logout">登出</span>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push('/')
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({name: '登录页面'})
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="less" scoped>
.root{
  background: #2980b9;
  display: flex;
  line-height: 80px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.2);
  .left-part{
    .logo-text{
      font-size: 2.5rem;
      color: #ecf0f1;
      text-shadow: 2px 2px 2px #2c3e50;
    }
  }
  .right-part{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
    .user-info{
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .avatar{
        height: 60%;
        border-radius: 50%;
        overflow: hidden;
        img{
          max-height: 100%;
          max-width: 100%;
        }
      }
      .user-detail{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 15px 0 5px;
        .user-name{
          height: 20px;
          line-height: 20px;
          color: white;
          font-weight: bold;
          margin-bottom: 5px;
          min-width: 80px;
          text-align: center;
        }
        .user-level{
          height: 15px;
          line-height: 15px;
          font-size: 12px;
          color: white;
          background: #2ecc71;
          text-align: center;
          padding: 1px 3px;
          font-weight: 200;
          border-radius: 2px;
        }
      }
    }
    .action{
      font-size: .8rem;
      color: rgba(255, 255, 255, .7);
      span{
        margin: 0 5px;
        cursor: pointer;
      }
      span:hover{
        color: white;
      }
    }
  }
}
</style>
