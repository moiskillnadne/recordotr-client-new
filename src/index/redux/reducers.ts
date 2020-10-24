import { Reducer } from 'redux'

import produce from 'immer'

import { combineReducers } from 'redux-immer'

import { RootState } from '@/types/state.d'

function importAllReducers(): Record<keyof RootState, Reducer> {
  const r = require.context('@/store/reducer', true, /\.ts$/)

  const allReducers: Record<string, Reducer> = {}

  r.keys().forEach((key) => {
    allReducers[`${key.replace('.ts', '').replace('./', '')}State`] = r(key).default
  })

  return allReducers
}

const createRootReducer = (): Reducer<RootState> => combineReducers(produce, importAllReducers())

export default createRootReducer
