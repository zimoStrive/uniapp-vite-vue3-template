<template>
  <view class="index">
    <CustomNavbar />

    <button @click="showModal">弹窗</button>
    <button @click="showToast">轻提示</button>
    <ZmTabs />

    <!-- 测试 unocss -->
    <view center class="test">
      <view icon-btn>紫陌YYDS</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomNavbar from './cpns/CustomNavbar.vue'

onMounted(() => {
  // 演示 uniStorage
  uniStorage.set('name', 'zimo')
  uniStorage.set('name1', 'zimo')
  uniStorage.set('name2', 'zimo')
  uniStorage.delete('name')

  //演示 useLoading
  // 调用 useLoading
  useLoading(true, {
    overlay: false,
    // 更多配置项...
  })

  // 2 秒后隐藏 loading
  setTimeout(() => {
    useLoading(false)
  }, 2000)
})

const showModal = async () => {
  try {
    const result = await useModal('这是一个提示框', {
      title: '自定义标题',
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      // 更多配置项...
    })

    // 用户点击了确认按钮
    console.log('用户点击了确认按钮')
  } catch (error) {
    // 在用户点击取消按钮时，会进入这里的错误处理
    console.log(error)
  }
}

const showToast = async () => {
  // 调用 useToast，并等待 Promise 完成
  await useToast('这是一个提示', {
    position: 'center',
    duration: 2000,
    overlay: false,
    icon: 'success',
    // 更多配置项...
  })

  // 在这里添加其他逻辑，例如在提示消失后执行一些操作
  console.log('提示显示完成')
}
</script>

<style lang="scss">
.test {
  width: 100%;
  height: 200px;
  background-color: yellowgreen;
}
</style>
