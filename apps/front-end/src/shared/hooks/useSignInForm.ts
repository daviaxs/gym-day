import { useForm } from 'react-hook-form'
import { signInUserData, signIpSchema } from '../schemas/SignInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { setCookie } from 'nookies'
import { useState } from 'react'

export function useSignInForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<signInUserData>({
    resolver: zodResolver(signIpSchema),
    mode: 'onChange',
  })

  const signIn = (data: signInUserData) => {
    const { email, password } = data
    setLoading(true)

    api
      .post('/authenticate', {
        email,
        password,
      })
      .then((response) => {
        setErrorMessage(null)
        setCookie(undefined, 'GymDay.accessToken', response.data.token, {
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: '/',
        })
        setSuccessMessage(true)
        window.location.href = '/app/inicio'
      })
      .catch((e) => {
        setErrorMessage(e.response.data.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    loading,
    successMessage,
    errorMessage,
    signIn,
    methods,
  }
}
