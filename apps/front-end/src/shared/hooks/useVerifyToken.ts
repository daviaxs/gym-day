import { api } from '@/lib/axios'
import { destroyCookie, parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { GYM_DAY_ACCESS_TOKEN } from '../constants/cookiesNames'

export function useVerifyToken() {
  const [success, setSuccess] = useState(false)
  const cookies = parseCookies()
  const token = cookies[GYM_DAY_ACCESS_TOKEN]

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      api
        .get('/verifyToken', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setSuccess(true)
        })
        .catch(() => {
          destroyCookie(null, GYM_DAY_ACCESS_TOKEN, { path: '/' })
          window.location.href = '/auth/entrar'
        })
    })()
  }, [token])

  return { success }
}
