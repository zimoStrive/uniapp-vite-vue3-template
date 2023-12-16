/**
 * uniStorage 模块，封装 UniApp 的本地存储 API。
 */

const uniStorage = {
  /**
   * 设置永久缓存
   * @param key 缓存键
   * @param value 缓存值
   */
  set(key: string, value: any): void {
    uni.setStorageSync(key, value)
  },

  /**
   * 获取永久缓存
   * @param key 缓存键
   * @returns 缓存值
   */
  get(key: string): any {
    return uni.getStorageSync(key)
  },

  /**
   * 移除永久缓存
   * @param key 缓存键
   */
  delete(key: string): void {
    uni.removeStorageSync(key)
  },

  /**
   * 移除全部永久缓存
   */
  clear(): void {
    uni.clearStorageSync()
  },
}

export default uniStorage
