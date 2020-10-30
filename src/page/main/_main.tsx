import React, { FC } from 'react'

import { A } from 'hookrouter'

import { PageSettings } from '@/index/route/type'

const MainPage: FC = (): JSX.Element => {
  return (
    <main className="MainPage">
      MainPage
      <A href="/login">Login</A>
    </main>
  )
}

const routeProps: PageSettings = {
  id: 'MainPage',
  pathNames: ['/'],
  Component: (): JSX.Element => <MainPage />,
  footer: false,
  header: false,
}

export default routeProps
