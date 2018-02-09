<template>
  <pannel title="用户管理" class="root">
    <el-button slot="action" type="primary" size="mini" @click="addUser">
      <i class="el-icon-plus"></i>
    </el-button>
    <el-table
      v-loading="loading"
      :data="users">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
        <template slot-scope="scope">
          <el-tag type="info">{{ scope.row.id }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="role_name"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="deleted"
        label="状态"
        width="180">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.deleted !== '1'">正常</el-tag>
          <el-tag type="danger"  v-if="scope.row.deleted === '1'">失效</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="action"
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="checkUser(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      slot="pagination"
      layout="prev, pager, next"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      @current-change="changePage"
      :total="pagination.totalCount">
    </el-pagination>
  </pannel>
</template>

<script>
import Pannel from '@/components/Pannel'
import userService from '@/services/userService'

export default {
  data () {
    return {
      users: [],
      loading: true,
      pagination: {
        currentPage: 1,
        pageSize: 8,
        totalCount: 1
      }
    }
  },
  methods: {
    async getUsers (page) {
      this.loading = true
      try {
        const response = await userService.userlist({
          'token': this.$store.getters.token,
          'per_page': this.pagination.pageSize,
          'page': page
        })
        const jsonData = userService.handleBack(response)
        if (jsonData.success) {
          this.users = jsonData.data.users
          this.pagination.currentPage = jsonData.data.page
          this.pagination.totalCount = Number(jsonData.data.count)
        } else {
          userService.sErr(jsonData, this)
        }
      } catch (error) {
        userService.nErr(error, this)
      }
      this.loading = false
    },
    changePage (page) {
      this.getUsers(page)
    },
    addUser () {
      console.log('addUser')
      this.$router.push({name: 'addUser'})
    },
    checkUser (user) {
      // console.log(user.id, user.username)
      this.$router.push({name: 'userInfo', params: {id: user.id}})
    },
    async deleteUser (user) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        this.loading = true
        try {
          const response = await userService.delete({
            'token': this.$store.getters.token,
            'user_id': user.id
          })
          const jsonData = userService.handleBack(response)
          if (jsonData.success) {
            this.$message({
              message: jsonData.message,
              type: 'success'
            })
            this.getUsers(this.pagination.currentPage)
          } else {
            userService.sErr(jsonData, this)
          }
        } catch (error) {
          userService.nErr(error, this)
        }
        this.loading = false
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  mounted: function () {
    this.getUsers(this.pagination.currentPage)
  },
  components: {
    Pannel
  }
}
</script>

<style lang="less" scoped>
.root{
  width: 100%;
}
.el-table{
  width: 100%;
}
</style>
