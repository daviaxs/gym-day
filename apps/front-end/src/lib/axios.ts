import { GYM_DAY_ACCESS_TOKEN } from '@/shared/constants/cookiesNames'
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

api.interceptors.response.use(undefined, async (error) => {
  if (error.config && error.response && error.response.status === 401) {
    if (error.config.url === '/token/refresh') {
      return Promise.reject(error)
    }

    try {
      const response = await api.post(
        '/token/refresh',
        {},
        {
          withCredentials: true,
        },
      )

      const { token } = response.data

      document.cookie = `${GYM_DAY_ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      document.cookie = `${GYM_DAY_ACCESS_TOKEN}=${token};path=/;`

      error.config.headers.Authorization = `Bearer ${response.data.token}`
      return api.request(error.config)
    } catch (refreshError) {
      console.log(refreshError)
    }
  }

  return Promise.reject(error)
})
