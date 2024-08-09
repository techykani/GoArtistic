import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { DiscoverTabs } from '@/components/discover-our-brands/discover-tabs'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'

// dynamic imports
const Brands: ComponentType<any> = dynamic(
  () => import('../../components/discover-our-brands/brands'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const query = pageQuery(groq`
*[_type == 'discoverOurBrands'][0] {
  ...,
  sections[] {
    ...,
    options [] {
      ...,
      cards[] {
      ...,
      "secondaryImg": secondaryImg.asset->url,
    }
    }
  }
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

export default function DiscoverOurBrands(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data

  const { sections } = page || { sections: [] }
  if (sections) {
    return (
      <main className="overflow-visible">
        {renderObjectArray(sections, {
          'discoverOurBrands.landingHero': PageBanner,
          'discoverOurBrands.discoverTabs': DiscoverTabs,
          'discoverOurBrands.brands': Brands,
        })}
      </main>
    )
  }
  return <></>
}
