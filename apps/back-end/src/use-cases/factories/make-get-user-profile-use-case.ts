import { GetUserProfileUseCase } from '../get-user-profile'
import { usersRepository } from './repository'

export function makeGetUserProfileUseCase() {
  const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository)

  return getUserProfileUseCase
}
