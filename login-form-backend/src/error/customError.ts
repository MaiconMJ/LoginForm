export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message)
  }
}

export class UserNotFound extends CustomError{ 
  constructor(){
      super(404, "Usuário não encontrado")
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super( 401, "User unauthorized")
  }
}