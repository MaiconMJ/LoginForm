export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message)
  }
}

export class InvalidName extends CustomError{ 
  constructor(){
      super(400, "Invalid name")
  }
}

export class InvalidEmail extends CustomError{ 
  constructor(){
      super(400, "Invalid email")
  }
}

export class InvalidPassword extends CustomError{ 
  constructor(){
      super(400, "Invalid password")
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