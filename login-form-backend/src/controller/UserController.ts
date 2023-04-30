import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserDatabase } from '../data/UserDatabase'
import { GetUserByIdDTO, GetUserDTO, LoginInputDTO, UserInputDTO } from '../model/user'

export class UserController {
  
  public signup =async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body

      const input: UserInputDTO = { 
        name, 
        email, 
        password,
      }

      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup(input)

      res.status(201).send({ message: 'User created!', token})

    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body
      
      const input: LoginInputDTO = {
        email,
        password,
      }

      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input)

      res.status(200).send({token})

    } catch (error: any) {

    }
  }

  public getUser = async (req: Request, res: Response) => {
    try {
      const input: GetUserDTO = {
        token: req.headers.authorization as string
      }

      const userBusiness = new UserBusiness()
      const user = await userBusiness.getUser(input)

      res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
      })

    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}