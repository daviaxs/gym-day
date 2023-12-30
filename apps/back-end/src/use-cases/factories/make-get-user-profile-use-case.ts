import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserProfileUseCase } from '../get-user-profile'

const usersRepository = new InMemoryUsersRepository()

export function makeGetUserProfileUseCase() {
  const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository)

  return getUserProfileUseCase
}
