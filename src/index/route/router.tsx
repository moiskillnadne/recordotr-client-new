import React, { FC, useMemo } from 'react'

import { useRoutes } from 'hookrouter'

import NotFound from '@/page/notFound/notFound'

import RouterManager from './routerManager'

import allRoutes from './allRoutes'

const Router: FC = (): JSX.Element => {
  const routerManager = new RouterManager(allRoutes)

  const routes = useMemo(() => routerManager.routes, [allRoutes])

  const routeResult = useRoutes(routes)

  return <>{routeResult || <NotFound />}</>
}

export default Router
