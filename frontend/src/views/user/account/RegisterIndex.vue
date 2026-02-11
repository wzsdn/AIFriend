<script setup>

</script>

<template>
  <div class="flex justify-center mt-30">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend">欢迎注册</legend>
      <label class="label">邮箱</label>
      <input type="email" class="input" placeholder="Email"/>

      <label class="label">密码</label>
      <input type="password" class="input" placeholder="Password"/>

       <label class="label">确认密码</label>
      <input type="password" class="input" placeholder="Password"/>

      <button class="btn btn-neutral mt-4">注册</button>
      <div class="flex justify-end">
        <RouterLink :to="{name:'register-index'}" class="btn btn-soft btn-info btn-ghost">登录2</RouterLink>
      </div>
    </fieldset>
  </div>

</template>

<style scoped>

</style>