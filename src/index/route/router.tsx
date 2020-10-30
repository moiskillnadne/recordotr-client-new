import React, { FC, useMemo } from 'react'

import { useRoutes } from 'hookrouter'

import NotFound from '@/page/notFound/notFound'

import RouterManager from './routerManager'

import Animation from './animation'

import allRoutes from './allRoutes'

const Router: FC = (): JSX.Element => {
  const routerManager = useMemo(() => new RouterManager(allRoutes), [allRoutes])

  const routes = useMemo(() => routerManager.routes, [allRoutes])

  const routeResult = useRoutes(routes)

  return (
    <Animation pageSettingsByPath={routerManager.pageSettingsById} currentPageId={routeResult.props.id}>
      {routeResult || <NotFound />}
    </Animation>
  )
}

export default Router
