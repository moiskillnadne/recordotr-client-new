export type PageSettings<P = {}> = {
  id: string
  name?: string
  Component: (params: Record<string, string>) => JSX.Element
  className?: string
  componentProps?: P
  exact?: boolean
  redirect?: string
  roles?: []
  pathNames: string[]
  authorizedOnly?: boolean
  header?: boolean
  footer?: boolean
}

export type PageSettingsById = {
  [path: string]: PageSettings
}
