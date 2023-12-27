import { createUserData } from '../schemas/signUpSchema'

export function useSignUpForm() {
  const createUSer = (data: createUserData) => {
    if (data.password !== data.verifyPassword) {
      console.error('As senhas devem ser iguais')
    }

    console.log(data)
  }

  return {
    createUSer,
  }
}
