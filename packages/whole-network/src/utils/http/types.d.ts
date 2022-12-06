import Axios, { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

export type resultType = {
  accessToken?: string
}

export type RequestMethods = Extract<
  Method,
  'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'
>
export interface ResponseData<T> extends AxiosResponse {
  code: number
  msg: string
  result: T
}
export interface HttpError extends AxiosError {
  config?: HttpRequestConfig
}

export interface HttpResponse extends AxiosResponse {
  config: HttpRequestConfig
}
export type CustomOption = {
  loading?: boolean
  loadingOption?: string
  target?: string
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  customOptions?: CustomOption
}

export default class Http {
  request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: HttpRequestConfig
  ): Promise<T>
  download<T, P>(url: string, params?: T, config?: HttpRequestConfig): Promise<P>
}
