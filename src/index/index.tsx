import './index.css'

import React, { FC } from 'react'

import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Routes from './route/router'

import * as serviceWorker from './serviceWorker'

import store from './redux/store'

const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
