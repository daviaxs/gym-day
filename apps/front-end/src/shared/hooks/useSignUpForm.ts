import { useState } from 'react'
import { signUpSchema } from '../schemas/signUpSchema'
import { z } from 'zod'

export function useSignUpForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    verifyPassword: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prevState) => {
      const newFormData = { ...prevState, [name]: value }

      const allInputsFilled = Object.values(newFormData).every(
        (input) => input.length > 0,
      )

      setButtonDisabled(!allInputsFilled)

      console.log(newFormData)

      return newFormData
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      signUpSchema.parse(formData)

      console.log('Dados do formulário válidos: ', formData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Erro de validação Zod:', error.errors)
      }

      console.error(error)
    }
  }

  return {
    handleSubmit,
    handleInputChange,
    formData,
    buttonDisabled,
  }
}
