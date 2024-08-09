import { CorporateHealthcare } from '@/components/health-screening/corporateHealthcare'
import { CorporateHealthcareScreening } from '@/components/health-screening/corporateHealthcareScreening'
import { ScreeningList } from '@/components/health-screening/screeningList/screeningList'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback, useEffect, useState } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import { useRouter } from 'next/router'

import { FAQ } from '@/components/health-screening/healthFAQ'
import { GuidingPrinciple } from '@/components/health-screening/guidingPrinciple'

const query = pageQuery(groq`
   *[_type == 'healthScreening'][0] {
		...,
		sections[] {
			...,
		},
    "packages": *[_type == "package"]  {
			...,
      entities[] {
        ...,
    entity -> {
      name,
      entity
    }
      },
      test  {
        ...,
        addons {
          ...,
        },
        preferredTest {
          ...,
        },
        consultTest[] {
          labTitle,
            _key,
            labTest[] -> {
            _id,
             title,
             _type
          }
          },
          clinic[] -> {
            _id,
            title,
            _type
           },
        laboratoryTest[] {
          labTitle,
            _key,
            labTest[] -> {
            _id,
             title,
             _type
          }
          },
         radiology[] -> {
          _id,
          title,
          _type
         },
         other[] -> {
          _id,
          title,
          _type
         },
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

export default function HealthScreening(props: SanityProps) {
  const {
    page: { sections, packages },
  } = useSanityQuery(query, props).data
  console.log(sections, 'sections')
  const router = useRouter()
  const { data } = router.query
  const receivedData = data ? JSON.parse(decodeURIComponent(data as string)) : null
  const [dataFromChild, setDataFromChild] = useState<any>(receivedData || '')

  const handleDataFromChild = (data: any) => {
    setDataFromChild(data)
  }
  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'healthScreening.landingHero': PageBanner,
        'healthScreening.guidingPrinciple': GuidingPrinciple,
        'healthScreening.filter': useCallback(
          (props: any) => (
            <ScreeningList
              options={props.options}
              title={props.title}
              optionsDropdown={props.optionsDropdown}
              specificConcern={props.specificConcern}
              packages={packages}
              dataFromChilds={dataFromChild}
              // route={ROUTES.PACKAGES}
            />
          ),
          [packages, dataFromChild],
        ),
        'healthScreening.screening': useCallback(
          (props: any) => (
            <CorporateHealthcareScreening
              tagline={props.tagline}
              title={props.title}
              image={props.image}
              description={props.description}
              cta={props.cta}
              props={handleDataFromChild}
              // route={ROUTES.PACKAGES}
            />
          ),
          [],
        ),
        'healthScreening.corporateHealth': CorporateHealthcare,
        'ourGPServicesPage.faq': FAQ,
      })}
    </main>
  )
}
