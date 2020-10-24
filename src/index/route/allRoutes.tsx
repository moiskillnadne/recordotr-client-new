/* eslint-disable no-restricted-syntax */
import React from 'react'

import { HookRouter } from 'hookrouter'

import c from 'clsx'

// import { isAuthorized } from '@helpers/user.helper'

// import Header from '@components/header/header'
// import Footer from '@components/footer/footer'
import { PageRoute } from './type'

// import { ProtectedRoute } from './ProtectedRoute'

const importedRoutes = importAllRoutes()

const routes: HookRouter.RouteObject = {}

for (const importedRoute of importedRoutes) {
  for (const pathName of importedRoute.pathNames) {
    routes[pathName] = (params: Record<string, string>): JSX.Element => getComponent(importedRoute, params)
  }
}

function getComponent(importedRoute: PageRoute, params: { [key: string]: string }): JSX.Element {
  // if (importedRoute.authorizedOnly && !isAuthorized()) {
  //   navigate('/login')
  //   return getComponent(importedRoutes.find((r) => r.name === 'Login') as PageRoute, params)
  // }

  const components = []
  // if (importedRoute.header !== false) components.push(Header)
  components.push(importedRoute.Component)
  // if (importedRoute.footer !== false) components.push(Footer)

  return (
    <div className={c('Hookrouter', importedRoute.className)}>
      {components.map(
        (Component, key): JSX.Element => (
          // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
          <Component key={key} {...params} />
        ),
      )}
    </div>
  )
}

function importAllRoutes(): PageRoute[] {
  const r = require.context('@/', true, /page\/(.)+\/_(.)+\.tsx$/)

  const pageRoutes: PageRoute[] = []

  r.keys().forEach((key) => {
    pageRoutes.push(r(key).default)
  })

  return pageRoutes
}

export default routes
