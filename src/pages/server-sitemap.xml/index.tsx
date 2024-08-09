import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity'

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://url.com'

function generateURL(path: string) {
  return `${baseUrl}/${path}`
}

function mapPathsToURLs(paths: string[], template: string) {
  return paths.map((path) => generateURL(template.replace(':path', path)))
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = groq`{
    "doctors": *[_type == 'doctor' && defined(slug.current)][].slug.current,
    "hubSpotForms": *[_type == 'hubSpotForm' && defined(slug.current)][].slug.current,
    "careers": *[_type == 'careers' && defined(slug.current)][].slug.current,
    "events": *[_type == 'event' && defined(slug.current)][].slug.current,
    "mediaCoverage": *[_type == 'mediaCoverage' && defined(slug.current)][].slug.current,
    "wellnessArticles": *[_type == 'wellnessArticle' && defined(slug.current)][].slug.current,
    "centresOfExcellence": *[_type == 'centresOfExcellence' && defined(slug.current)][].slug.current,
    "clinicalService": *[_type == 'clinicalService' && defined(slug.current)][].slug.current,
    "packages": *[_type == 'package' && defined(slug.current)][].slug.current,
    "procedures": *[_type == 'procedure' && defined(slug.current)][].slug.current,
    "medicalSpecialties": *[_type == 'medicalSpecialty' && defined(slug.current)][].slug.current,
  }`

  const paths = await sanityClient('anonymous').fetch(query)

  const doctors = mapPathsToURLs(paths.doctors, 'our-doctors/:path')
  const hubSpotForms = mapPathsToURLs(paths.hubSpotForms, ':path')
  const careers = mapPathsToURLs(paths.careers, 'about-us/careers/:path')
  const events = mapPathsToURLs(paths.events, 'about-us/events/:path')
  const mediaCoverage = mapPathsToURLs(paths.mediaCoverage, 'about-us/media-coverage/:path')
  const wellnessArticles = mapPathsToURLs(
    paths.wellnessArticles,
    'learning-hub/wellness-articles/:path',
  )
  const centresOfExcellence = mapPathsToURLs(
    paths.centresOfExcellence,
    'services/centres-of-excellence/:path',
  )
  const clinicalService = mapPathsToURLs(paths.clinicalService, 'services/clinical-services/:path')
  const packages = mapPathsToURLs(paths.packages, 'services/packages/:path')
  const procedures = mapPathsToURLs(paths.procedures, 'services/procedures/:path')
  const medicalSpecialties = mapPathsToURLs(
    paths.medicalSpecialties,
    'services/specialised-focus/:path',
  )

  const urls = [
    ...doctors,
    ...hubSpotForms,
    ...careers,
    ...events,
    ...mediaCoverage,
    ...wellnessArticles,
    ...centresOfExcellence,
    ...clinicalService,
    ...packages,
    ...procedures,
    ...medicalSpecialties,
  ]

  const fields = urls.map((url) => ({
    loc: url.replace(/&/g, '&amp;'),
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }))

  // Even if I put a string in changefreq as the type suggest the changefreq still shows type error. That's why ignored the type.
  //@ts-ignore
  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}
