import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
  userEmailData,
  forgotPasswordSchema,
} from '../schemas/ForgotPasswordSchema'

export function useForgotPasswordForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<userEmailData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  })

  const sendEmail = (data: userEmailData) => {
    const { email } = data
    console.log('Email: ', email)
  }

  return {
    sendEmail,
    loading,
    successMessage,
    errorMessage,
    methods,
  }
}
