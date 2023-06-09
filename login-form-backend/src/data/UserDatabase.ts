import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into('Login_form_users')
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public getUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection('Login_form_users')
      .select().where({ email })
      return result[0]
    } catch (error) {
      throw new CustomError(400, error.message)
    }
  }

  public getUserById = async (id: string) => {

    try {
      const result = await UserDatabase.connection('Login_form_users')
        .select("*")
        .from('Login_form_users')
        .where({ id });

      return result[0];

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }

  }

}



