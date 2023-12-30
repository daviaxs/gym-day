import { useForm } from 'react-hook-form'
import { createUserData, signUpSchema } from '../schemas/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'

export function useSignUpForm() {
  const [captcha, setCaptcha] = useState<string | null>()
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successCreateUser, setSuccessCreateUser] = useState(false)

  const methods = useForm<createUserData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  const { setError, register, setValue } = methods

  const onCaptchaChange = (value: string | null) => {
    setCaptcha(value)
    setValue('captcha', value as string, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  useEffect(() => {
    register('captcha', { required: true })
  }, [register])

  const createUSer = (data: createUserData) => {
    if (!captcha) {
      setError('captcha', {
        type: 'manual',
        message: 'O captcha é obrigatório',
      })
      return
    }

    const { email, name, password } = data

    api
      .post('/users', {
        name,
        email,
        password,
      })
      .then(() => {
        setErrorMessage(null)
        setSuccessCreateUser(true)
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message)
      })
  }

  return {
    successCreateUser,
    onCaptchaChange,
    errorMessage,
    createUSer,
    methods,
  }
}
