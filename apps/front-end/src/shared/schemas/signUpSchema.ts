import { z } from 'zod'
import { rules } from 'packages-gym-day-rules/rules'

export const signUpSchema = z
  .object({
    name: rules.nameValidation,

    email: z.string().email('E-mail inválido'),

    password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),

    verifyPassword: z
      .string()
      .min(6, 'A senha precisa de no mínimo 6 caracteres'),

    captcha: z.string().optional(),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: 'As senhas devem ser iguais',
    path: ['verifyPassword'],
  })

export type createUserData = z.infer<typeof signUpSchema>
