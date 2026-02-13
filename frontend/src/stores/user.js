import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore=defineStore('user',()=>{
    const id=ref(0)
    const username=ref('')
    const photo=ref('')
    const profile=ref('')
    const access_token=ref('')

    function isLogin(){
        return !!access_token.value
    }
    function setAccessToken(token){
        access_token.value=token
    }
    function setUserInfo(data){
        id.value=data.userid
        username.value=data.username
        photo.value=data.photo
        profile.value=data.profile
    }
    function logout(){
        id.value=0
        username.value=""
        photo.value=""
        profile.value=""
        access_token.value=""
    }
    return {
        id,
        username,
        photo,
        profile,
        access_token,
        isLogin,
        setAccessToken,
        setUserInfo,
        logout,
    }
})