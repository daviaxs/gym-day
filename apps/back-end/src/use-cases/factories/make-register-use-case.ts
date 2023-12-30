import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { RegisterUseCase } from '../register'
// import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

const usersRepository = new InMemoryUsersRepository()

export function makeRegisterUseCase() {
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
