import { http, cookie } from '@/utils/http'
import type { WirelessSystem, Interface } from '@/views/overview/type'

// 系统与无线信息
export const getWirelessSystem = (showLoading?: boolean): Promise<WirelessSystem> => {
  const loading = showLoading || showLoading === false ? showLoading : true
  return http.request(
    'get',
    '/cgi-bin/luci/system/status/info',
    {},
    { customOptions: { loading, target: '.container-wrapper' } }
  )
}
// 接口信息
export const getInterface = (showLoading?: boolean): Promise<{ netInfo: Interface[] }> => {
  const loading = showLoading || showLoading === false ? showLoading : true
  return http.request(
    'get',
    '/cgi-bin/luci/system/status/netInfo',
    {},
    { customOptions: { loading, target: '.container-wrapper' } }
  )
}
// 硬件资源
export const getResource = (
  showLoading?: boolean
): Promise<{ memRate: number; cpuRate: number }> => {
  const loading = showLoading || showLoading === false ? showLoading : true
  return http.request(
    'get',
    '/cgi-bin/luci/system/status/hardwareStats',
    {},
    { customOptions: { loading, target: '.container-wrapper' } }
  )
}

export const getNetTraffic = () => {
  return http.request(
    'post',
    '/cgi-bin/luci/admin/ubus?1667461062194',
    {
      data: {
        id: 39,
        jsonrpc: '2.0',
        method: 'call',
        params: [cookie, 'luci-rpc', 'getNetworkDevices', {}]
      }
    },
    { customOptions: { loading: false, target: '.container-wrapper' } }
  )
}
// IP流量统计开关
export const switchIPStatistics = (data) => {
  return http.request('post', '/cgi-bin/luci/system/status/IpStatsEnable', { data })
}
