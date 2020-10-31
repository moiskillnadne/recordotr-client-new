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
  pageAnimation?: {
    appear?: number
    enter?: number
    exit?: number
    nextEnter?: number
  }
}

export type PageSettingsById = {
  [path: string]: PageSettings
}
