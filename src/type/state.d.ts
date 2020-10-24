import { Errorable } from '@/index/redux/middlewares/api'

import { UserModel } from './model'

export type UserState = Errorable & {
  User: UserModel
}

export type RootState = {
  userState: UserState
}
