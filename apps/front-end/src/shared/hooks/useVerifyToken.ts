import { api } from '@/lib/axios'
import { destroyCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { GYM_DAY_ACCESS_TOKEN } from '../constants/cookiesNames'
import { userAccesToken } from '../constants/cookiesValues'

export function useVerifyToken() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      api
        .get('/verifyToken', {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
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
  }, [])

  return { success }
}
