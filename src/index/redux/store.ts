import { applyMiddleware, compose, createStore, Store } from 'redux'

import { RootState } from '@/type/state'

import { Api } from './middlewares/api'

import createRootReducer from './allReducers'

const api = new Api()

const isDevelopment = process.env.NODE_ENV === 'development'

const composeEnhancer =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (isDevelopment && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

function configureStore(preloadedState?: RootState): Store {
  const store = createStore(createRootReducer(), preloadedState, composeEnhancer(applyMiddleware(api.middleware())))

  return store
}

export default configureStore()
