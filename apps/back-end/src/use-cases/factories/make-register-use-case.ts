import { RegisterUseCase } from '../register'
import { usersRepository } from './repository'

export function makeRegisterUseCase() {
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
