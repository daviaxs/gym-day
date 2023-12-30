export class UserAlreadyEmailExistError extends Error {
  constructor() {
    super('User already email exist')
  }
}
