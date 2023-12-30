import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { UserNotFoundError } from './errors/user-not-found-error'

interface getUserProfileUseCaseRequest {
  userId: string
}

interface getUserPRofileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: getUserProfileUseCaseRequest): Promise<getUserPRofileUseCaseResponse> {
    const user = await this.usersRepository.findUserById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    return { user }
  }
}
