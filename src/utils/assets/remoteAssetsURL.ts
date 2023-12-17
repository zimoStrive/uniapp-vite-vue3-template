import useHost from '@/config/env.host.ts'

/**
 * 为远程资源构建 URL 地址。
 * @param remotePath - 远程资源的路径。
 * @param options - 可选参数。
 * @param options.avoidCache - 控制缓存的标志（默认为 false）。
 * @returns 远程资源的 URL 地址。
 */
function useRemoteURL(remotePath: string, { avoidCache = false }: { avoidCache?: boolean } = {}) {
  let resourceURL: string = `${useHost}/assets${remotePath}`

  if (avoidCache) {
    // 时间戳来防止浏览器缓存,每次请求资源时都获得最新版本的资源。
    resourceURL += `?t=${new Date().getTime()}`
  }

  return resourceURL
}

export const useRemoteResourceURL = useRemoteURL

export default useRemoteURL
