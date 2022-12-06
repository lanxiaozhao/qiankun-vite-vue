/**
 * @description 终端管理列表数据
 */
export interface TerminalItem {
  /** 主机名称 */
  name: string
  /** 所属范围 true有线 false无线 */
  access: boolean
  ipv4: string
  mac: string
  /** 上行速率 */
  txRate: number
  /** 下行速率 */
  rxRate: number
  /** 接入设备 */
  accessName: string
  /** 射频单元  */
  radio: string
  ssid: string
  vlanId: string
  /** 信号强度 */
  rssi: string
  accessTime: string
  /** 是否本机 */
  current: boolean
  /** 是否限速 */
  rateLimit: boolean
  /** 最大上行速率 */
  maxTxRate?: number
  /** 最大下行速率 */
  maxRxRate?: number
  /** 是否限制时间 */
  allowTime: number
  /** 限制时间段 */
  limiteTime?: any[]
}
export type BlackItem = {
  name: string
  mac: string
}
