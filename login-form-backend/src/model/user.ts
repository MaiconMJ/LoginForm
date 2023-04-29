export type user = {
  id: string
  name: string
  email: string
  password: string
}

export interface UserInputDTO {
  name: string,
  email: string,
  password: string
}

export interface LoginInputDTO {
  email: string,
  password: string
}

export type AuthenticationData = {
  id: string
}

export interface GetUserDTO {
  token: string
}

export interface GetUserByIdDTO {
  id: string
}