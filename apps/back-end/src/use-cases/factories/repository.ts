import { env } from '@/env'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export const usersRepository =
  env.NODE_ENV === 'production'
    ? new PrismaUsersRepository()
    : new InMemoryUsersRepository()
