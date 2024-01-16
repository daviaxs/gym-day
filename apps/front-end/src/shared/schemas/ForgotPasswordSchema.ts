import { rules } from 'packages-gym-day-rules/rules'
import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: rules.emailValidation,
})

export type userEmailData = z.infer<typeof forgotPasswordSchema>
