import {createRouter, createWebHistory} from 'vue-router'
import HomepageIndex from "@/views/homepage/HomepageIndex.vue";
import FriendIcon from "@/components/navbar/icons/FriendIcon.vue";
import FriendIndex from "@/views/friend/FriendIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";
import LoginIndex from "@/views/user/account/LoginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";
import ProfileIndex from "@/views/user/profile/ProfileIndex.vue";
import {useUserStore} from "@/stores/user.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomepageIndex,
            name: 'homepage-index',
            meta:{
                needLogin:false
            }
        },
        {
            path: '/friend/',
            component: FriendIndex,
            name: 'friend-index',
             meta:{
                needLogin:false
            }
        }, {
            path: '/create/',
            component: CreateIndex,
            name: 'create-index'
            ,
             meta:{
                needLogin:true
            }
        }, {
            path: '/404/',
            component: NotFoundIndex,
            name: '404',
             meta:{
                needLogin:false
            }
        }, {
            path: '/user/account/login/',
            component: LoginIndex,
            name: 'login-index',
             meta:{
                needLogin:false
            }
        }, {
            path: '/user/account/register/',
            component: RegisterIndex,
            name: 'register-index',
             meta:{
                needLogin:false
            }
        }, {
            path: '/user/space/:user_id/',
            component: SpaceIndex,
            name: 'user-space-index',
             meta:{
                needLogin:true
            }
        }, {
            path: '/user/profile/',
            component: ProfileIndex,
            name: 'user-profile-index',
             meta:{
                needLogin:true
            }
        },
      {
        //匹配任意路径
        path: '/:pathMatch(.*)*',
          component:NotFoundIndex,
          name:'not-found',
             meta:{
                needLogin:false
            }

      },
    ],
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()

  const needLogin = to.meta.needLogin

  // 刷新页面时，先等 App.vue 里 get_user_info / 刷新 token 的流程跑完
  // 只有在已经确认拉取过用户信息之后，才根据 isLogin 做跳转判断
  if (!user.setHasPullUserInfo) {
    return next()
  }

  if (needLogin && !user.isLogin()) {
    return next({ name: 'login-index', query: { redirect: to.fullPath } })
  }

  if (user.isLogin() && (to.name === 'login-index' || to.name === 'register-index')) {
    return next({ name: 'homepage-index' })
  }

  return next()
})

export default router
