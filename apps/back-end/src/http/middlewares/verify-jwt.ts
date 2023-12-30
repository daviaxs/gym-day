import { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJWT(req: FastifyRequest, reply: FastifyReply) {
  try {
    req.headers.authorization?.replace('Bearer ', '')
  } catch (e) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }
}
