<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getUserInfoAPI } from '@/services/user'
onLaunch(() => {
  console.log('App Launch')
  console.log(import.meta.env)
})
onShow(() => {
  console.log('App Show')
  getUserInfoAPI({ a: 1 }).then((res) => {})
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'uview-plus/index.scss';
</style>
