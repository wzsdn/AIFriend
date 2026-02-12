import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore=defineStore('user',()=>{
    const id=ref(1)
    const username=ref('wzy')
    const photo=ref('http://127.0.0.1:8000/media/user/photos/default.png')
    const profile=ref('11')
    const access_token=ref('111')

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