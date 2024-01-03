import { rules } from 'packages-gym-day-rules/rules'
import { z } from 'zod'

export const signIpSchema = z.object({
  email: rules.emailValidation,

  password: rules.passwordValidation,
})

export type signInUserData = z.infer<typeof signIpSchema>
