import { applyMiddleware, compose, createStore, Store } from 'redux'

import { RootState } from '@/types/state'

import { Api } from './middlewares/api'

import immutablePayloadMiddleware from './middlewares/immutablePayload'

import createRootReducer from './reducers'

const api = new Api({})

const isDevelopment = process.env.NODE_ENV === 'development'

const composeEnhancer =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (isDevelopment && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

function configureStore(preloadedState?: RootState): Store {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(applyMiddleware(immutablePayloadMiddleware(), api.middleware())),
  )

  return store
}

export default configureStore()
