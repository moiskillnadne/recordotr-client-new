import { PageRoute } from './type'

function allRoutes(): PageRoute[] {
  const r = require.context('@/', true, /page\/(.)+\/_(.)+\.tsx$/)

  const pageRoutes: PageRoute[] = []

  r.keys().forEach((key) => {
    pageRoutes.push(r(key).default)
  })

  return pageRoutes
}

export default allRoutes()
