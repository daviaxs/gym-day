import { UserAlreadyEmailExistError } from '@/use-cases/errors/user-already-email-exist-error'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySChema = z.object({
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
      })
      .refine((value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(value), {
        message: 'O nome não pode conter números ou caracteres especiais',
      }),

    email: z.string().email(),

    password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres'),
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

    if (e instanceof UserAlreadyEmailExistError) {
      return reply.status(400).send({ message: 'E-mail já cadastrado' })
    }

    return reply.status(400).send({ message: e })
  }

  return reply.status(201).send()
}
