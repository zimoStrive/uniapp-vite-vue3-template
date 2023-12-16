<template>
  <view class="cart">cart</view>
  
  <!-- 测试分包 -->
  <u-button type="primary" @click="goPage">跳转登录</u-button>
</template>
<script setup lang="ts">
const goPage = () => {
  uni.navigateTo({
    url: '/subPackages/login/login'
  })
}
</script>

<style lang="scss">
//
</style>
