<template>
  <el-aside class="root" width="200px">
    <el-menu class="menu"
      text-color="#fff"
      :default-active="this.activeItem"
      :router="true"
      :unique-opened="true"
      background-color="#2c3e50"
      active-text-color="#ffd04b">
      <!-- 首页 -->
      <el-menu-item
        index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 用户管理 -->
      <el-menu-item
        v-if="currentUser.role_id === '0'"
        index="/user_manage">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <!-- 产品管理 -->
      <el-menu-item
        index="/product">
        <i class="el-icon-menu"></i>
        <span slot="title">产品管理</span>
      </el-menu-item>
      <!-- 商家管理 -->
      <el-menu-item
        index="/seller">
        <i class="el-icon-menu"></i>
        <span slot="title">商家管理</span>
      </el-menu-item>
      <!-- 商家管理 -->
      <el-menu-item
        index="/profit">
        <i class="el-icon-menu"></i>
        <span slot="title">收益管理</span>
      </el-menu-item>
      <!-- 测试 -->
      <!-- <el-menu-item
        v-if="currentUser.role_id === '0'"
        index="/test">
        <i class="el-icon-menu"></i>
        <span slot="title">测试</span>
      </el-menu-item> -->
      <!-- 子菜单 -->
      <!-- <el-submenu
        v-if="currentUser.role_id === '0'"
        index='1'>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Menu</span>
        </template>
        <el-menu-item index='1-1-1'>
          <i class="el-icon-caret-right"></i>
          <span>title</span>
        </el-menu-item>
      </el-submenu> -->
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      activeItem () {
        let list = this.$route.path.split('/')
        return '/' + list[1]
      },
      currentUser () {
        let user = this.$store.getters.user
        return user
      }
    }
  }
</script>

<style lang="less" scoped>
  .root {
    background: #2c3e50;
    // border-right: 2px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    overflow: hidden;
  }

  .menu {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

</style>
