import { useForm } from 'react-hook-form'
import { createUserData, signUpSchema } from '../schemas/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSignUpForm() {
  const methods = useForm<createUserData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  const createUSer = (data: createUserData) => {
    if (data.password !== data.verifyPassword) {
      console.error('As senhas devem ser iguais')
    }

    console.log(data)
  }

  return {
    createUSer,
    methods,
  }
}
