import { FastifyInstance } from 'fastify'
import { register } from './register'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { profile } from './profile'
import { authenticate } from './authenticate'
import { refresh } from './refresh'
import { deleteUser } from './delete'
import { verifyToken } from './verifyToken'
import { logout } from './logout'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/authenticate', authenticate)
  app.get('/verifyToken', verifyToken)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.delete('/me', { onRequest: [verifyJWT] }, deleteUser)
  app.post('/token/refresh', { onRequest: [verifyJWT] }, refresh)
  app.post('/logout', logout)
}
