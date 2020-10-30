import React, { FC } from 'react'

import { A } from 'hookrouter'

import { PageRoute } from '@/index/route/type'

type MainPageProps = {
  text?: 'string'
}

const MainPage: FC<MainPageProps> = ({ text }): JSX.Element => {
  return (
    <main>
      MainPage
      {text}
      <A href="/login">Login</A>
    </main>
  )
}

const routeProps: PageRoute = {
  className: 'MainPage',
  pathNames: ['/'],
  Component: (): JSX.Element => <MainPage />,
  footer: false,
  header: false,
}

export default routeProps
