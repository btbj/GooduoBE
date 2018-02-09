import Home from '@/pages/Home/home'
import UserManage from '@/pages/UserManage/userManage'
import AddUser from '@/pages/UserManage/addUser'
import UserInfo from '@/pages/UserManage/userInfo'

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user_manage',
      name: 'userManage',
      component: UserManage
    },
    {
      path: '/user_manage/addUser',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '/user_manage/userInfo/:id',
      name: 'userInfo',
      component: UserInfo
    }
  ]
}
