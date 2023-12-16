<template>
  <view class="my">
    <u-button text="模拟登录" type="info" @click="login"></u-button>
    <u-button text="模拟退出登录" type="primary" @click="logout"></u-button>
  </view>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores'
const userStore = useUserStore()
function login() {
  userStore.setToken('newToken-zimo~~~~')
}
function logout() {
  userStore.clearToken()
}
</script>

<style lang="scss">
//
</style>
