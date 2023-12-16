/*
 * Promise 化： 通过使用 Promise 封装Modal，可以通过 .then() 和 .catch() 等 Promise API
 *来处理模态框的结果，使代码更具可读性和可维护性。
 */

/**
 * 使用弹窗对话框
 * @param content 对话框内容
 * @param options 对话框选项
 * @returns Promise，当用户确认时解析为 { type: 'confirm' }，取消时拒绝为 { type: 'cancel' }
 */
export function useModal(
  content: string,
  {
    title = '提示',
    showCancelButton = false,
    confirmButtonText = '确认',
    cancelButtonText = '取消',
    ...moreOptions
  }: {
    title?: string
    showCancelButton?: boolean
    confirmButtonText?: string
    cancelButtonText?: string
    [key: string]: any
  } = {},
): Promise<{ type: 'confirm' } | { type: 'cancel' }> {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      confirmText: confirmButtonText,
      cancelText: cancelButtonText,
      showCancel: showCancelButton,
      ...moreOptions,
      success({ cancel }) {
        if (cancel) {
          reject({ type: 'cancel' })
        }

        resolve({ type: 'confirm' })
      },
    })
  })
}

/**
 * @desc uni 轻提示
 * @param {string} content 内容
 * @param {Object} options 扩展参数
 * @returns {Promise<uni>} 当提示结束时解析为 uni 对象
 */
export function useToast(
  content: string,
  {
    position = 'center',
    duration = 1000,
    overlay = true,
    icon = 'none',
    ...moreOptions
  }: {
    position?: 'top' | 'bottom' | 'center' // 根据实际情况调整可能的值
    duration?: number
    overlay?: boolean
    icon?: 'success' | 'loading' | 'none' // 根据实际情况调整可能的值
    [key: string]: any
  } = {},
): Promise<typeof uni> {
  if (!content) {
    uni.hideToast()
    return Promise.resolve(uni)
  }

  uni.showToast({
    title: content,
    position,
    duration,
    mask: overlay,
    icon,
    ...moreOptions,
  })

  return new Promise((resolve) => {
    // 持续时间
    setTimeout(() => {
      resolve(uni)
    }, duration)
  })
}

/**
 * @desc 显示或隐藏 loading
 * @param {string | boolean} content loading提示文本或布尔值，为布尔值时使用默认提示文本
 * @param {Object} options 扩展参数
 */
export function useLoading(
  content: string | boolean,
  { overlay = true, ...moreOptions }: { overlay?: boolean; [key: string]: any } = {},
): void {
  if (content && typeof content === 'boolean') {
    content = '努力加载中...'
  }

  if (!content) {
    uni.hideLoading()
    return
  }

  uni.showLoading({
    title: content as string,
    mask: overlay,
    ...moreOptions,
  })
}
