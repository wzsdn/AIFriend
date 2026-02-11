<script setup>

</script>

<template>
  <div class="flex justify-center mt-30">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend">欢迎登录</legend>
      <label class="label">邮箱</label>
      <input type="email" class="input" placeholder="Email"/>

      <label class="label">密码</label>
      <input type="password" class="input" placeholder="Password"/>

      <button class="btn btn-info  mt-4">登录</button>
      <div class="flex justify-end">
        <RouterLink :to="{name:'register-index'}" class="btn btn-accent btn-ghost">注册</RouterLink>
      </div>
    </fieldset>
  </div>

</template>

<style scoped>

</style>