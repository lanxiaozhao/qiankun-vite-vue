import { http, cookie } from '@/utils/http'
import { Interface } from '@/views/overview/type'

// 接口信息
export const getInterface = (): Promise<{ netInfo: Interface[] }> => {
  return http.request('get', '/cgi-bin/luci/system/status/netInfo')
}
// 修改接口模式
export const editInterfaceMode = (data) => {
  return http.request('post', '/cgi-bin/luci/system/interfaces/mwan', { data })
}
