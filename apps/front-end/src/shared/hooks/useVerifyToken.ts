import { api } from '@/lib/axios'
import { destroyCookie, parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

export function useVerifyToken() {
  const [success, setSuccess] = useState(false)
  const cookies = parseCookies()
  const token = cookies['GymDay.accessToken']

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
          destroyCookie(null, 'GymDay.accessToken', { path: '/' })
          window.location.href = '/auth/entrar'
        })
    })()
  }, [token])

  return { success }
}
