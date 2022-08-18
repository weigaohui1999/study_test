import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import MyGoods from '@/components/menus/MyGoods.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MySettings from '@/components/menus/MySettings.vue'
import MyUsers from '@/components/menus/MyUsers.vue'
import MyUserDetail from '@/components/user/MyUserDetail.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      children: [
        {
          path: 'goods',
          component: MyGoods
        },
        {
          path: 'orders',
          component: MyOrders
        },
        {
          path: 'rights',
          component: MyRights
        },
        {
          path: 'settings',
          component: MySettings
        },
        {
          path: 'users',
          component: MyUsers
        },
        {
          path: 'userinfo/:id',
          component: MyUserDetail,
          props: true
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })
export default router
