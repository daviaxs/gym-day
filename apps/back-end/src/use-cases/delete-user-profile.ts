import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from './errors/user-not-found-error'

interface DeleteUserProfileUseCaseRequest {
  userId: string
}

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ userId }: DeleteUserProfileUseCaseRequest): Promise<void> {
    const user = await this.usersRepository.findUserById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    await this.usersRepository.deleteUser(userId)
  }
}
