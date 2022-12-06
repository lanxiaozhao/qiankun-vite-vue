import { http } from '@/utils/http'

export const getLogin = (data?: object) => {
  return http.request(
    'post',
    '/cgi-bin/luci',
    { data },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )
}
