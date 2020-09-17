// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

// 1.通过 Vue.use(插件)， 安装路由
Vue.use(VueRouter)

// 2.创建 VueRouter 对象
const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    }
]
const router = new VueRouter({
    routes
})
//  3.将 router 对象传入到 vue 实例中
export default router