import { z } from 'zod'
import { rules } from 'packages-gym-day-rules/rules'

export const signUpSchema = z
  .object({
    name: rules.nameValidation,

    email: rules.emailValidation,

    password: rules.passwordValidation,

    verifyPassword: rules.passwordValidation,

    captcha: z.string().optional(),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: 'As senhas devem ser iguais',
    path: ['verifyPassword'],
  })

export type createUserData = z.infer<typeof signUpSchema>
