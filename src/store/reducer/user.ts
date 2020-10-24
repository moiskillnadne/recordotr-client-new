import { ApiOnStatusAction } from '@/index/redux/middlewares/api.d'

import { UserModel } from '@/types/model'

import { UserState } from '@/types/state'

const initialState: UserState = {
  User: {
    id: '',
    email: '',
    users: [],
  },
  error: '',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (state = initialState, { type, payload }: ApiOnStatusAction<UserModel>) => {
  switch (type) {
    case 'kl':
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case 'k':
      return {
        ...state,
        isLoading: false,
        error: payload?.body?.error || '',
      }
    case 'SET_USER':
      return {
        User: payload.body?.data || state.User,
        error: '',
      }
    default:
      return state
  }
}
