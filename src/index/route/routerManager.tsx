/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'

import { HookRouter } from 'hookrouter'

import c from 'clsx'

import { PageRoute } from './type'

export default class RouterManager {
  pageRoutes: PageRoute[]

  constructor(pageRoutes: PageRoute[]) {
    this.pageRoutes = pageRoutes
  }

  get routes(): HookRouter.RouteObject {
    const routes: HookRouter.RouteObject = {}

    for (let pri = 0; pri < this.pageRoutes.length; pri += 1) {
      const iPageRoute = this.pageRoutes[pri]

      for (let ni = 0; ni < iPageRoute.pathNames.length; ni += 1) {
        const iPathName = iPageRoute.pathNames[ni]

        routes[iPathName] = (params: Record<string, string>): JSX.Element =>
          this.getComponent(iPageRoute, params, iPathName)
      }
    }

    return routes
  }

  private getComponent = (iPageRoute: PageRoute, params: { [key: string]: string }, iPathName: string): JSX.Element => {
    // if (importedRoute.authorizedOnly && !isAuthorized()) {
    //   navigate('/login')
    //   return getComponent(importedRoutes.find((r) => r.name === 'Login') as PageRoute, params)
    // }

    const components = []
    // if (importedRoute.header !== false) components.push(Header)
    components.push(iPageRoute.Component)
    // if (importedRoute.footer !== false) components.push(Footer)

    return (
      <div className={c('Hookrouter', iPageRoute.className)}>
        {components.map(
          (Component): JSX.Element => (
            <Component key={iPathName} {...params} />
          ),
        )}
      </div>
    )
  }
}
