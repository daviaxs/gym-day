import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export const usersRepository = new PrismaUsersRepository()
