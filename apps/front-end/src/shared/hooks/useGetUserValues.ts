import { useEffect, useState } from 'react'
import { userAccesToken } from '../constants/cookiesValues'
import { api } from '@/lib/axios'

interface User {
  name: string
  email: string
  avatar: string
}

export function useGetUserValues() {
  const [userValues, setUserValues] = useState<User>({
    name: 'Usuário',
    email: 'emailNãoEncontrado',
    avatar: '',
  })

  useEffect(() => {
    api
      .get('/me', {
        headers: {
          Authorization: `Bearer ${userAccesToken}`,
        },
      })
      .then((response) => {
        const user: User = response.data.user

        setUserValues({
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        })
      })
  }, [])

  return { userValues }
}
