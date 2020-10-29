import React, { FC } from 'react'

import { Form, Field } from 'react-final-form'

import { A } from 'hookrouter'

import { PageRoute } from '@/index/route/type'

type MainPageProps = {
  text?: 'string'
}

const MainPage: FC<MainPageProps> = ({ text }): JSX.Element => {
  return (
    <div className="MainPage">
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
    </div>
  )

  function onSubmit(value: unknown) {
    // eslint-disable-next-line no-console
    console.log(value)
  }
}

const routeProps: PageRoute = {
  pathNames: ['/login'],
  Component: (): JSX.Element => <MainPage />,
  footer: false,
  header: false,
}

export default routeProps
