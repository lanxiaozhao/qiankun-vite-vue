import { http, cookie } from '@/utils/http'

enum action {
  disconnect,
  joinBlackList,
  removeBlackList,
  cancelManage
}
export const getTerminal = () => {
  return http.request('get', '/cgi-bin/luci/system/StaMgr/staInfo')
}

export const editTerminal = (data) => {
  return http.request('post', '/cgi-bin/luci/system/StaMgr/editStaInfo', { data })
}

export const getBlackList = () => {
  return http.request('get', '/cgi-bin/luci/system/StaMgr/blacklist')
}

export const removeBlack = (data) => {
  return http.request('post', '/cgi-bin/luci/system/StaMgr/controlSta', {
    data: Object.assign({ action: action.removeBlackList }, data)
  })
}

export const joinBlackList = (data) => {
  return http.request('post', '/cgi-bin/luci/system/StaMgr/controlSta', {
    data: Object.assign({ action: action.joinBlackList }, data)
  })
}

export const disconnect = (data) => {
  return http.request('post', '/cgi-bin/luci/system/StaMgr/controlSta', {
    data: Object.assign({ action: action.disconnect }, data)
  })
}

export const cancelManage = (data) => {
  return http.request('post', '/cgi-bin/luci/system/StaMgr/controlSta', {
    data: Object.assign({ action: action.cancelManage }, data)
  })
}
