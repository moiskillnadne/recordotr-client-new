import React, { FC } from 'react'

import { PageSettings } from '@/index/route/type'

const MainPage: FC = (): JSX.Element => {
  return (
    <main className="MainPage">
      <section>MainPage</section>
    </main>
  )
}

const routeProps: PageSettings = {
  id: 'MainPage',
  pathNames: ['/'],
  Component: (): JSX.Element => <MainPage />,
  pageAnimation: {
    enter: 500,
    exit: 500,
    appear: 0,
  },
}

export default routeProps
