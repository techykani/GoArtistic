import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export function convertBreadcrumbTitle(string: string) {
  const commonP = ['for', 'of', 'at', 'and', '&', 'by', 'off', 'to', 'with', 'or']
  if (string === 'COVID-19-info') {
    return 'COVID-19 Info'
  } else if (string === 'medisave') {
    return 'MediSave'
  } else if (string == 'myheart-programme') {
    return 'MyHeart Programme'
  }

  const strArr = string.split('-')
  const str = strArr.map((e) => {
    return commonP.includes(e) ? e.toLowerCase() : e[0].toUpperCase() + e.slice(1)
  })

  return str.join(' ')
}

export function useBreadcrumb() {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<any>(null)

  useEffect(() => {
    if (router) {
      // ToDo:find a better way to achieve this
      const asPathQueryIndex = router.asPath.indexOf('?')
      const path =
        asPathQueryIndex === -1 ? router.asPath : router.asPath.slice(0, asPathQueryIndex)

      const linkPath = path.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  return breadcrumbs
}
