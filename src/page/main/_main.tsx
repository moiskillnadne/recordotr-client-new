import React, { FC } from 'react'

import { PageRoute } from '@/index/route/type'

const routeProps: PageRoute = {
  pathNames: ['/'],
  Component: (): JSX.Element => <MainPage />,
  footer: false,
  header: false,
}

type MainPageProps = {
  text?: 'string'
}

const MainPage: FC<MainPageProps> = ({ text }): JSX.Element => {
  return (
    <div className="MainPage">
      MainPage
      {text}
    </div>
  )
}

export default routeProps
