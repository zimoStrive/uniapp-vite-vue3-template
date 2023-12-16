/**
 * 从本地获取资源的文件路径。
 * @param filePath - 资源文件的路径。
 * @returns 资源文件的 URL 地址。
 */
function useLocalAssets(filePath: string): string {
  let fileURL: string = ''

  // 使用 import.meta.glob 方法以静态方式获取匹配指定模式的所有模块
  const assets: Record<string, any> = import.meta.glob('/src/assets/**/*', { eager: true })

  // 根据传入的文件路径构建完整的路径并获取默认资源路径
  fileURL = assets[`/src/assets${filePath}`].default

  return fileURL
}

export const useAssets = useLocalAssets

export default useLocalAssets
