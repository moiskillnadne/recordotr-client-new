import './_login.css'

import React, { FC } from 'react'

import { useDispatch } from 'react-redux'

import { Form, Field } from 'react-final-form'

import { A } from 'hookrouter'

import md5 from 'md5'

import { PageSettings } from '@/index/route/type'

import * as authActions from '@/store/action/auth'

type MainPageProps = {
  text?: 'string'
}

const MainPage: FC<MainPageProps> = ({ text }): JSX.Element => {
  const dsp = useDispatch()

  return (
    <main>
      LoginPage
      {text}
      <A href="/">Main</A>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="fdc">
            <Field name="email">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" {...input} placeholder="email" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password" validate={(v) => !v && 'required'}>
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" {...input} placeholder="password" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <button type="submit">submit</button>
          </form>
        )}
      />
    </main>
  )

  function onSubmit(value: authActions.LoginReqBody) {
    // eslint-disable-next-line no-console
    console.log(value)

    dsp(
      authActions.login({ ...value, password: md5(value.password) }, function onSuccess(resData) {
        // eslint-disable-next-line no-console
        console.log(resData)
      }),
    )
  }
}

const routeProps: PageSettings = {
  id: 'LoginPage',
  pathNames: ['/login'],
  Component: (p): JSX.Element => <MainPage {...p} />,
  footer: false,
  header: false,
  pageAnimation: {
    enter: 500,
    exit: 500,
    appear: 0,
  },
}

export default routeProps
