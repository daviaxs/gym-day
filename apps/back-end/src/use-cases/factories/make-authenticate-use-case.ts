import { AuthenticateUseCase } from '../authenticate'
import { usersRepository } from './repository'

export function makeAuthenticateUseCase() {
  const authenticateUseCase = new AuthenticateUseCase(usersRepository)

  return authenticateUseCase
}
