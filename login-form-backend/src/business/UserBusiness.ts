import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound, Unauthorized } from "../error/customError";
import {
  UserInputDTO,
  user,
  LoginInputDTO,
  GetUserDTO,
  GetUserByIdDTO
} from "../model/user"
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, email, password} = input

      if (!name || !email || !password) {
        throw new CustomError( 400, 'fill all the fields')
      }

      if (!email.includes('@')) {
        throw new InvalidEmail()
      }


      
      const id: string = idGenerator.generateId()

      const user: user = {
        id,
        name, 
        email, 
        password,
      }

      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)

      const token = authenticator.generateToken({id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public login =async (input: LoginInputDTO) => {
    try {
      const { email, password } = input

      if (!email && !password) {
        throw new CustomError( 400, 'Fill all the fields')
      }

      if (!password) {
        throw new InvalidPassword()
      }

      if (!email.includes('@') || !email) {
        throw new InvalidEmail()
      }

      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserByEmail(email)

      if (!user) {
        throw new UserNotFound
      }

      if (user.password !== password) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({ id: user.id })

      return token

    } catch (error) {
      throw new CustomError(400, error.message)
    }
  }

  public getUser = async (input: GetUserDTO) => {
    try {
      const { token } = input
      const { id } = authenticator.getTokenData(token)

      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserById(id)

      return user
    } catch (error) {
      throw new CustomError(400, error.message)
    }
  }

  // public getUserId = async (input: GetUserByIdDTO) => {
  //   try {

  //     const { id } = input
  //     //const { id } = authenticator.getTokenData(token)

  //     const userDatabase = new UserDatabase();
  //     const user = await userDatabase.getUserById(id)

  //     return user

  //   } catch (error: any) {
  //     throw new CustomError(400, error.message)
  //   }
  // }
}