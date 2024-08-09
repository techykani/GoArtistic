import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import { VaccinationSubsidies } from '@/components/vaccination/vaccinationSubsidies'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { Enquiry } from '@/components/vaccination/Enquiry'


const query = pageQuery(groq`
   *[_type == 'vaccination'][0] {
		...,
		
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
        'vaccination.pageBanner': PageBanner,
        'vaccination.vaccinationTab': VaccinationSubsidies,
        'vaccination.enquiry': Enquiry,
      })}
    </main>
  )
}
