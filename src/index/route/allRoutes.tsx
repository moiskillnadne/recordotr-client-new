import { PageSettings } from './type'

function allRoutes(): PageSettings[] {
  const r = require.context('@/', true, /page\/(.)+\/_(.)+\.tsx$/)

  const pageRoutes: PageSettings[] = []

  r.keys().forEach((key) => {
    pageRoutes.push(r(key).default)
  })

  return pageRoutes
}

export default allRoutes()
