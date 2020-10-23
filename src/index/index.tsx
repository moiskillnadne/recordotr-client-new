import './index.css'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Provider, useDispatch } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import store from './redux/store'

const Test = () => {
  const dsp = useDispatch()

  useEffect((): void => {
    dsp({
      type: 'opo',
      payload: 'sdsd',
    })
  }, [])

  return <div />
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Test />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
