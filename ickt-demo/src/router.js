import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Home from './views/Home'
import List from './views/List'
import Detail from './views/Detail'

Vue.use(Router)
// 实例化
let router = new Router({
    routes: [
        // 首页
        {
            path: '/',
            name: 'home',
            component: Home
        },
        // 列表页
        {
            path: '/list/:id',
            component: List
        },
        // 详情页
        {
            path: '/detail/:id',
            component: Detail
        },
        // 默认路由
        {
            path: '*',
            component: Home
        }
    ]
})
// 全局监听
// router.afterEach((...arg) => console.log(arg))
// router.beforeEach((route, oldRoute, next) => {
//     // next方法必须执行
//     next();
// })

// 返回路由
export default router;

// export default new Router({
//     routes: [
//         // 首页
//         {
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         // 列表页
//         {
//             path: '/list/:id',
//             component: List
//         },
//         // 详情页
//         {
//             path: '/detail/:id',
//             component: Detail
//         },
//         // 默认路由
//         {
//             path: '*',
//             component: Home
//         }
//     ]
// })
