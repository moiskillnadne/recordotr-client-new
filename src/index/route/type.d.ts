export type PageRoute<P = {}> = {
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: (params: any) => JSX.Element
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
