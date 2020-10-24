import React, { FC } from 'react'

import { useRoutes } from 'hookrouter'

import NotFound from '@/page/notFound/notFound'

import routes from './allRoutes'

const Routes: FC = (): JSX.Element => {
  const routeResult = useRoutes(routes)

  return <>{routeResult || <NotFound />}</>
}

export default Routes
