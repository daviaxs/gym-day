import { z } from 'zod'

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' })
      .max(20, { message: 'O nome precisa ter no máximo 20 caracteres' })
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0]
              .toLocaleUpperCase()
              .concat(word.substring(1).toLocaleLowerCase())
          })
          .join(' ')
      }),

    email: z.string().email('E-mail inválido'),

    password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),

    verifyPassword: z
      .string()
      .min(6, 'A senha precisa de no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: 'As senhas devem ser iguais',
    path: ['verifyPassword'],
  })

export type createUserData = z.infer<typeof signUpSchema>
