export class UserAlreadyEmailExistError extends Error {
  constructor() {
    super('Este e-mail já está em uso')
  }
}
