import { http, cookie } from '@/utils/http'

// 重启
export const reboot = () => {
  return http.request('post', '/cgi-bin/luci/system/sysUtils/reboot')
}

// 备份
export const backup = (): Promise<{ result: Blob; name: string }> => {
  return http.download('/cgi-bin/luci/system/sysUtils/backup')
}

// 检查新版本
export const checkNew = (): Promise<{ version: string }> => {
  return http.request(
    'get',
    '/cgi-bin/luci/system/sysUtils/checkVersion',
    {},
    { customOptions: { loading: false } }
  )
}

// 获取当前版本
export const getVersion = (): Promise<{ softwareVersion: string; hardwareVersion: string }> => {
  return http.request('get', '/cgi-bin/luci/system/sysUtils/getVersion')
}

// 获取设备名称
export const getDeviceName = (): Promise<{ name: string }> => {
  return http.request('get', '/cgi-bin/luci/system/sysUtils/getName')
}
// 修改设备名称
export const editDeviceName = (data) => {
  return http.request('post', '/cgi-bin/luci/system/sysUtils/setName', { data })
}

// 恢复出厂
export const resetDevice = () => {
  return http.request('post', '/cgi-bin/luci/system/sysUtils/restore')
}

// 导入
export const uploadSet = '/cgi-bin/luci/system/sysUtils/import'

// 在线升级
export const onlineUpgrade = () => {
  return http.request('post', '/cgi-bin/luci/system/sysUtils/onlineUpgrade')
}

// 本地升级
export const localUpgrade = '/cgi-bin/luci/system/sysUtils/localUpgrade'
