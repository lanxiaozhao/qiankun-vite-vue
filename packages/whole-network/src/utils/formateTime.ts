export function getTimeDuration(second: number) {
  const days = Math.floor(second / 86400)
  const hours = Math.floor((second % 86400) / 3600)
  const minutes = Math.floor(((second % 86400) % 3600) / 60)
  const seconds = Math.floor(((second % 86400) % 3600) % 60)
  const duration = `${days}天${hours}小时${minutes}分${seconds}秒`
  return duration
}
export function getFormateTime(time: string | Date | number) {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const week = weekArr[date.getDay()]
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  const result = `${year}年${month}月${day}日 ${week} ${h}时${m}分${s}秒`
  return result
}
