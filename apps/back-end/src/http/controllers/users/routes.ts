import { FastifyInstance } from 'fastify'
import { register } from './register'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { profile } from './profile'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
