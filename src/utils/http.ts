import { useUserStore } from '@/stores'
import useHost from '@/config/env.host';
import {useToast} from '@/utils/uniModals';

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非http开头需要拼接
    if (!options.url.startsWith('http')) {
      options.url = useHost  + options.url
    }
    // 2. 请求超时
    options.timeout = 10000
    options.header = {
      ...options.header,
    }
    // 3. 添加 token 请求头标识
    const token = useUserStore()?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// http 请求
type Data<T> = {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  // 返回 Promise 对象
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        // 1. 获取数据成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 3.1 401错误  -> 清理用户信息，跳转到登录页
          useUserStore().clearToken()
          uni.navigateTo({
            url: '/subPackages/login/login',
          })
          reject(res)
        } else {
          // 3.2 其他错误 -> 根据后端错误信息轻提示
          useToast((res.data as Data<T>).msg || '请求失败')
          reject(res)
        }
      },
      fail(err) {
        // 3.3 网络错误 -> 提示用户换网络
        useToast('网络错误,换个网络试试~')
      },
    })
  })
}
