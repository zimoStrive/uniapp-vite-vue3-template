// 模拟请求
import { http } from '@/utils/http'

export const getUserInfoAPI = (data: any) => {
  return http({
    method: 'GET',
    url: '/api/mock/user**',
    data,
  })
}
