import { JobListing } from '@/components/careers/jobListing'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { CarouselListing } from '@/components/our-story/carouselListing'
import { Description } from '@/components/careers/description'

const query = pageQuery(groq`
   *[_type == 'careers'][0] {
		...,
		sections[] {
			...,
		},
    "jobs": *[_type == "jobDetail"]  {
			...,
      "listingImg": listingImg.asset->url
		}
}`)

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const props = await sanityStaticProps({
    context,
    query,
    params: {
      locale: 'en',
      defaultLocale: 'en',
    },
  })

  return {
    props,
    revalidate: 10,
  }
}

export default function HealthScreening(props: SanityProps) {
  const {
    page: { sections, jobs },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'careers.landingHero': PageBanner,
        // 'careers.titleDescription': useCallback(
        //   (props: any) => <JobListing title={props.title} jobs={jobs} />,
        //   [jobs],
        // ),
        'careers.description': Description,
        'career.community': CarouselListing,
      })}
    </main>
  )
}
