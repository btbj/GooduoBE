<template>
  <el-container>
    <el-header>
      <el-button v-if="backBtn" icon="el-icon-arrow-left" @click="navBack" class="pannel-nav-btn"></el-button>
      <span class="title">{{ title }}</span>
      <slot name="action">
      </slot>
    </el-header>
    <el-main>
      <slot>没有内容</slot>
      <div class="pagination">
        <slot name="pagination"></slot>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: [
    'backBtn',
    'title'
  ],
  methods: {
    navBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.el-container{
  height: 100%;
  width: 100%;
}
.el-header{
  display: flex;
  background: #ecf0f1;
  justify-content: space-between;
  align-items: center;
  color: #333;
  line-height: 60px;
  .pannel-nav-btn{
    margin-right: 1rem;
    width: 2rem;
    padding: .3rem 0;
  }
  .title{
    flex: 1;
    font-size: 1.1rem;
    font-weight: bold;
  }
}
.el-main{
  // background: #ecf0f1;
  background: white;
  padding: 0;
  .pagination{
    text-align: center;
  }
}
</style>
