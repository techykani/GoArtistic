import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { ComponentType, useCallback } from 'react'
import { withDimensions, renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import dynamic from 'next/dynamic'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { Masthead } from '@/components/widgets/blocks/banners/masthead'
import SearchBar from '@/components/homepage/search'
import AboutUs from '@/components/homepage/aboutUs'

// dynamic imports
const OurNetwork: ComponentType<any> = dynamic(() => import('../components/homepage/ourNetwork'), {
  loading: () => <p>Loading...</p>,
})

const CorporateHealthCare: ComponentType<any> = dynamic(
  () => import('../components/homepage/corporateHealthcare'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const Community: ComponentType<any> = dynamic(() => import('../components/homepage/community'), {
  loading: () => <p>Loading...</p>,
})

const MoreInsights: ComponentType<any> = dynamic(
  () => import('../components/homepage/moreInsights'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const Specialists: ComponentType<any> = dynamic(
  () => import('../components/homepage/specialists'),
  {
    loading: () => <p>Loading... </p>,
  },
)

const query = pageQuery(groq`
*[_type == 'homePage'][0] {
  ...,
  sections[] {
    ...,
    "primaryImg": primaryImg.asset->url,
    "secondaryImg": secondaryImg.asset->url,
     masterHead [] {
      ...,
    "largeScreenBannerImage": largeScreenBannerImage.asset->url,
    "smallScreenBannerImage": smallScreenBannerImage.asset->url,
    },
    points[] {
      ...,
      "icon": icon.asset->url,
      "mobileIcon": mobileIcon.asset->url,
    },
        specialtyList[] -> {
          _id,
          tagline,
          title,
          "HomeImg": HomeImg.asset->url,
          "HomeSecondaryImg": HomeSecondaryImg.asset->url,
          slug
        },
        insights[] -> {
          _id,
          title, slug {current},
          "primaryImg": primaryImg.asset->url,
          seo{
            description 
          }
        }
  },
}`)

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => ({
  props: await sanityStaticProps({
    context,
    query,
    params: {
      locale: 'en',
      defaultLocale: 'en',
    },
  }),
  revalidate: 10,
})

export default function Home(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'homePage.hero': Masthead,
        'homePage.popluarSearch': SearchBar,
        'homePage.about': AboutUs,
        'homePage.network': OurNetwork,
        'homePage.healthcare': CorporateHealthCare,
        'homePage.community': Community,
        'homePage.sharingMore': MoreInsights,
        'homePage.ourSpeciality': Specialists,
      })}
    </main>
  )
}
