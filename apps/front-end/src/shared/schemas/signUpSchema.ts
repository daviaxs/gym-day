import { z } from 'zod'

export const signUpSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    verifyPassword: z.string().min(6),
  })
  .superRefine(({ password, verifyPassword }, ctx) => {
    if (password !== verifyPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'As senhas não conferem',
      })
    }
  })
