import { DeleteUserUseCase } from '../delete-user-profile'
import { usersRepository } from './repository'

export function makeDeleteUserProfileUseCase() {
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository)

  return deleteUserUseCase
}
