import Vue from 'Vue'
import VueRouter from 'vue-router'

//引入组件
import showMap from '../views/showMap/index'
import Login from '../views/loginView/login'
import detail from '../views/detailMap/index'

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes:[
      //设置login为初始页面
      {
        path:'*',
        redirect:'/login'
      },
      {
        path:'/login',
        name:'login',
        component:Login
      },
      {
        path:'/showMap',
        name:'showMap',
        component:showMap
      },
      {
        path:'/detail',
        name:'detail',
        component:detail
      }
    ]
})