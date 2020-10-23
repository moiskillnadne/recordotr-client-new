import { Middleware, Dispatch, AnyAction } from 'redux'

import produce, { Draft } from 'immer'

function middleware(): Middleware<Dispatch> {
  return () => (next) => async (action): Promise<AnyAction> => {
    if (!action.payload) {
      return next(action)
    }

    const newAction = produce((draftAction: Draft<AnyAction>) => draftAction, action)()

    return next(newAction)
  }
}

export default middleware
