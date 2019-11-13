import originAxios from 'axios'
import { message } from 'antd'

const $http = originAxios.create({
  timeout: 2000,
  baseURL: '/api'
})

// $http.interceptors.request.use()

// 响应拦截器
$http.interceptors.response.use(
  function (response) {
    if (response.data && response.data.flag === 1) {
      let errorMsg = response.data.msg
      message.error(errorMsg)
      return Promise.reject(errorMsg)
    }
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export function $get(url: string, params: any) {
  return $http.get(url, {
    params
  })
}

export function $post(url: string, data: any) {
  return $http.post(url, data)
}

export default $http
