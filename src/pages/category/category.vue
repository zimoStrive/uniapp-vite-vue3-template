<template>
  <up-text text="uview的使用："></up-text>
  <view flex>
    <u-button text="紫陌" type="primary"></u-button>
    <u-button text="紫陌" type="success "></u-button>
    <u-button text="紫陌" type="warning "></u-button>
    <u-button text="紫陌" type="info"></u-button>
  </view>

  <text>uview内置类名</text>
  <text class="u-line-1">是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛</text>

  <text>************************************************</text>

  <button class="u-reset-button">重置uni按钮样式</button>

  <text>************************************************</text>

  <view class="u-border-bottom">
    夫人之相与，俯仰一世，或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外
  </view>

  <view>*****************uni-ui展示******************</view>
  <uni-tag text="标签"></uni-tag>
  <uni-tag text="标签" type="primary"></uni-tag>
  <uni-rate v-model="rateValue" @change="onChange" />
</template>
<script setup lang="ts">
let rateValue = ref(3)
const onChange = (e: any) => {
  console.log('rate发生改变:' + JSON.stringify(e))
}
</script>
<style lang="scss">
//
</style>
