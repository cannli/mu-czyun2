import Vue from 'vue'
import Router from 'vue-router'
// 注册router组件
Vue.use(Router)
// 导入组件
const home = resolve => require(['../App.vue'], resolve)
const message = resolve => require(['../components/message/message.vue'], resolve)
const friends = resolve => require(['../components/friends/friends.vue'], resolve)
const dynamic = resolve => require(['../components/dynamic/dynamic.vue'], resolve)
const babeInfo = resolve => require(['../components/babeInfo/index.vue'], resolve)
const examinationList = resolve => require(['../components/examinationList/examinationList.vue'], resolve)
let routes = [
  /*{path: '/message', name: 'message', component: message},
  {path: '/friends', name: 'friends', component: friends},
  {path: '/dynamic', name: 'dynamic', component: dynamic},
  {path: '/babeInfo', name: 'babeInfo', component: babeInfo},*/


  {
    path: '/',
    redirect: '/message',
    component: home,
    children: [
      {
        path: '/message',
        name: 'message',
        component: message,
        meta: {
          title: '成长档案',
          auth: true
        }
      },
      {
        path: '/friends',
        name: 'friends',
        component: friends,
        meta: {
          title: '成长档案',
          auth: true
        }
      },
      {
        path: '/dynamic',
        name: 'dynamic',
        component: dynamic,
        meta: {
          title: '我的',
          auth: true
        }
      },
      {
        path: '/babeInfo',
        name: 'babeInfo',
        component: babeInfo,
        meta: {
          title: '我的宝贝',
          auth: true
        }
      },
      {
        path: '/examinationList',
        name: 'examinationList',
        component: examinationList,
        meta: {
          title: '体检list',
          auth: true
        }
      }
    ]
  }
]
const router = new Router({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
});
export default router;
/*export default new Router({
  routes
})*/
