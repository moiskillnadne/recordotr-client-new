/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'

import { HookRouter } from 'hookrouter'

import c from 'clsx'

import Header from '@/components/header/_header'
import Footer from '@/components/footer/_footer'

import { PageSettings, PageSettingsById } from './type'

export default class RouterManager {
  public readonly pageRoutes: PageSettings[]

  public readonly pageSettingsById: PageSettingsById

  constructor(pageRoutes: PageSettings[]) {
    this.pageRoutes = pageRoutes
    this.pageSettingsById = {}
  }

  get routes(): HookRouter.RouteObject {
    const routes: HookRouter.RouteObject = {}

    for (let pri = 0; pri < this.pageRoutes.length; pri += 1) {
      const iPageRoute = this.pageRoutes[pri]

      for (let ni = 0; ni < iPageRoute.pathNames.length; ni += 1) {
        const iPathName = iPageRoute.pathNames[ni]

        this.pageSettingsById[iPageRoute.id] = iPageRoute

        routes[iPathName] = (params: Record<string, string>): JSX.Element => {
          return this.getComponent(iPageRoute, params, iPathName)
        }
      }
    }

    return routes
  }

  private getComponent = (
    iPageRoute: PageSettings,
    params: { [key: string]: string },
    iPathName: string,
  ): JSX.Element => {
    const withHeader = iPageRoute.header !== false
    const withFooter = iPageRoute.footer !== false

    // if (importedRoute.authorizedOnly && !isAuthorized()) {
    //   navigate('/login')
    //   return getComponent(importedRoutes.find((r) => r.name === 'Login') as PageRoute, params)
    // }

    const components = []
    if (withHeader) components.push(Header)
    components.push(iPageRoute.Component)
    if (withFooter) components.push(Footer)

    return (
      <div
        className={c('Hookrouter', iPageRoute.id, withHeader && 'withHeader', withFooter && 'withFooter')}
        id={iPageRoute.id}
      >
        {components.map(
          (Component): JSX.Element => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Component key={iPathName} {...params} page={iPageRoute as any} />
          ),
        )}
      </div>
    )
  }
}
