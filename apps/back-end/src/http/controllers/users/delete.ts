import { makeDeleteUserProfileUseCase } from '@/use-cases/factories/make-delete-user-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function deleteUser(req: FastifyRequest, reply: FastifyReply) {
  const deleteUserUseCase = makeDeleteUserProfileUseCase()

  await deleteUserUseCase.execute({
    userId: req.user.sub,
  })

  return reply.status(204).send()
}
