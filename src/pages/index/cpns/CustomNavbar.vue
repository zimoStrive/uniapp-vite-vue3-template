<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    navbar内容（已经处理好屏幕边界到安全区域距离！！！）
  </view>
</template>

<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background: rgb(0, 160, 233);
  padding-left: 20rpx;
  color: #fff;
}
</style>
