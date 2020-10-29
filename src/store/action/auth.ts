import { AnyAction } from 'redux'

import { REST_API } from '@/index/redux/middlewares/api'
import { OnStatus, ApiAction, Errorable } from '@/index/redux/middlewares/api.d'

import { SIGNUP, LOGIN, LOGOUT } from '../constant/auth'

export type LoginReqBody = {
  password: string
  email: string
}

export const signup = (body: LoginReqBody, onSuccess: OnStatus<Errorable>): ApiAction => ({
  type: REST_API,
  stageActionTypes: SIGNUP,
  url: '/api/v1/signup',
  method: 'post',
  onSuccess,
  body,
})

export const login = (body: LoginReqBody, onSuccess: OnStatus<Errorable>): ApiAction => ({
  type: REST_API,
  stageActionTypes: LOGIN,
  url: '/api/v1/login',
  method: 'post',
  onSuccess,
  body,
})

export const logout = (): AnyAction => ({
  type: LOGOUT,
})
