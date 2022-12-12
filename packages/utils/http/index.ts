import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  HttpError,
  RequestMethods,
  HttpResponse,
  HttpRequestConfig,
  ResponseData,
  CustomOption
} from './types.d'
import { ElLoading, ElMessage } from 'element-plus'
import { i18n } from '@/locales/i18n'
import router from '@/router/index'
import { fa } from 'element-plus/es/locale'
// @ts-ignore
const t = (val: string) => i18n.global.t(val)

export const cookie = 'b518fad2fc72049a0d4cd51f8c426757'

const LoadingInstance = {
  _target: null, // loading实例
  _count: 0
}
function closeLoading(customOption: CustomOption) {
  if (customOption.loading && LoadingInstance._count > 0) LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target.close()
    LoadingInstance._target = null
  }
}

/**
 * 处理HTTP异常码，只列举常规错误
 * @param {*} error
 */
function handleHttpErrorStatus(error: HttpError) {
  let message: string
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        message = t('httpErrorStarus.400')
        break
      case 401:
        message = t('httpErrorStarus.401')
        router.push('/login')
        break
      case 403:
        message = t('httpErrorStarus.403')
        break
      case 404:
        message = t('httpErrorStarus.404')
        break
      case 405:
        message = t('httpErrorStarus.405')
        break
      case 408:
        message = t('httpErrorStarus.408')
        break
      case 500:
        message = t('httpErrorStarus.500')
        break
      case 501:
        message = t('httpErrorStarus.501')
        break
      case 502:
        message = t('httpErrorStarus.502')
        break
      case 503:
        message = t('httpErrorStarus.503')
        break
      case 504:
        message = t('httpErrorStarus.504')
        break
      case 505:
        message = t('httpErrorStarus.505')
        break
      default:
        message = t('httpErrorStarus.default')
        break
    }
  }
  if (error.message.includes('timeout')) message = t('httpErrorStarus.timeout')
  ElMessage({
    type: 'error',
    message
  })
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  /** 初始化配置对象 */
  private static initConfig: HttpRequestConfig = Object.assign(defaultConfig, {
    customOptions: {
      loading: true,
      loadingOption: t('loading.dafault'),
      target: '.layout-container'
    }
  })

  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(this.initConfig)

  /** 请求拦截 */
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use(
      async (config: HttpRequestConfig) => {
        if (config.customOptions.loading) {
          LoadingInstance._count++
          // 多个请求只打开一个loading
          if (LoadingInstance._count === 1) {
            LoadingInstance._target = ElLoading.service({
              text: config.customOptions.loadingOption,
              target: config.customOptions.target
            })
          }
        }
        /** 请求白名单，放置一些不需要token的接口 */
        const whiteList = ['/login']
        return whiteList.some((v) => config.url.indexOf(v) > -1)
          ? config
          : new Promise((resolve) => {
              const data = localStorage.getItem('cookie')
              // 有auth,需要在header中添加auth,没有直接返回config即可
              if (data) {
                // todo 设置auth
                config.headers['Authorization'] = data
              }
              resolve(config)
            })
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(): void {
    const instance = Http.axiosInstance
    instance.interceptors.response.use(
      (response: HttpResponse) => {
        const $config = response.config
        $config.customOptions.loading && closeLoading($config.customOptions)
        if (response.config.responseType === 'blob') {
          return response
        }
        return response.data
      },
      (error: HttpError) => {
        const $config = error.config
        $config.customOptions.loading && closeLoading($config.customOptions)
        handleHttpErrorStatus(error)
        return Promise.reject(error)
      }
    )
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: HttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as HttpRequestConfig
    return new Promise((resolve, reject) => {
      Http.axiosInstance
        .request(config)
        .then((response: ResponseData<T>) => {
          // code不为0时直接显示后端返回的错误提示
          if (!response.code) {
            resolve(response.result)
          } else {
            ElMessage({
              type: 'error',
              message: response.msg
            })
            throw new Error(response.msg)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /** 下载请求 */
  public download<T, P>(url: string, params?: T, config?: HttpRequestConfig): Promise<P> {
    const defaultConfig: HttpRequestConfig = Object.assign(config ? config : {}, {
      customOptions: { loading: false }
    })
    return new Promise((resolve, reject) => {
      Http.axiosInstance
        .request({ method: 'get', url, params, ...defaultConfig, responseType: 'blob' })
        .then((respons: HttpResponse) => {
          const disposition = respons.headers['content-disposition']
          const filename = disposition.split('filename=')[1].split('"')[1]
          const data = { result: respons.data, name: filename } as any
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export const http = new Http()
