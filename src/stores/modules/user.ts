import { defineStore } from 'pinia'
import { ref } from 'vue'

import uniStorage from '@/utils/uniStorage';

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    // 令牌
    const token = ref<any>()

    // 清除token
    const clearToken = () =>  {
      token.value = undefined
    }

    const setToken = (newToken: string) => {
      token.value = newToken
    }

    // 记得 return
    return {
      token,
      clearToken,
      setToken,
    }
  },
  // TODO: 持久化
  {
    /* 网页端配置 */
    // persist: true,

    /* 小程序端配置 */ 

    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uniStorage.set(key, value)
        },
        getItem(key) {
          return  uniStorage.get(key)
        },
      },
      // 默认会将所有在 Pinia Store 中使用的状态保存到本地存储,paths 选项来指定哪些状态需要被持久化
      paths: ['token'],
    },
  },
)
