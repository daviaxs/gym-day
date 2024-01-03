import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'
import { rules } from 'packages-gym-day-rules/rules'

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySChema = z.object({
    name: rules.nameValidation,

    email: rules.emailValidation,

    password: rules.passwordValidation,
  })

  const { name, email, password } = registerBodySChema.parse(req.body)

  try {
    const registerUseCase = makeRegisterUseCase()

    await registerUseCase.execute({ name, email, password })
  } catch (e) {
    if (e instanceof ZodError) {
      const message = e.issues[0].message

      return reply.status(400).send({ message })
    }

    const error = e as Error
    return reply.status(500).send({ message: error.message })
  }

  return reply.status(201).send()
}
