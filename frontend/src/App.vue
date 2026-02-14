<script setup>

import NavBar from "@/components/navbar/NavBar.vue";
import {onMounted} from "vue";
import api from "@/js/http/api.js";
import {useUserStore} from "@/stores/user.js";
import {useRoute, useRouter} from "vue-router";


const user = useUserStore()
const route = useRoute()
const router=useRouter()

onMounted(async () => {
  try {
    const res = await api.get('api/user/account/get_user_info/')
    const data = res.data
    if (data.result === 'success') {
      user.setUserInfo(data)
    }
  } catch (e) {
    console.log(e)
  } finally {
    user.setHasPullUserInfo(true)//route 与router
    //没登录跳转登录界面
    if(route.meta.needLogin&&!user.isLogin()){
      await router.replace({
            name: 'login-index'
          }
      )
    }
  }
})

</script>

<template>
  <NavBar>
    <RouterView/>
  </NavBar>

</template>

<style scoped>

</style>
