import { useForm } from 'react-hook-form'
import { signInUserData, signIpSchema } from '../schemas/SignInSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSignInForm() {
  const methods = useForm<signInUserData>({
    resolver: zodResolver(signIpSchema),
    mode: 'onChange',
  })

  const signIn = (data: signInUserData) => {
    console.log(data)
  }

  return {
    signIn,
    methods,
  }
}
