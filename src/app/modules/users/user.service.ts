import config from '../../../confiq/index'
import { User } from './user.model'
import { IUser } from './users.interface'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (!createUser.password) {
    createdUser.password = config.userPass as string
  }
  if (!createdUser) {
    throw new Error("User doesn't create")
  }
  return createdUser
}
