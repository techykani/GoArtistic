import { DiscoverHero } from '@/components/discover-our-brands/discover-hero'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import OurLeadership from '@/components/leadership/leadership'
import SeniorManagement from '@/components/leadership/seniorManagement'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { Members } from '@/components/leadership/Members'
import { ExtraLinks } from '@/components/leadership/extraLinks'


const query = pageQuery(groq`
  *[_type == 'leadership'][0] {
		...,
        sections [] {
        ...,
       _type == "leadership.members" => {
      ...,
      "tab": tab{
        executiveLeadershipContent{
          ...,
          "leaders": leaders[]->{
            profileImage,
            name,
             "slug": slug.current,
            designation
          }
        },
        boardOfDirectorsContent{
          ...,
          "boards": boards[]{
            ...,
            boardMembers[]{
              memberName,
              caption
            }
          }
        }
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

export default function Home(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'leadership.landingHero': PageBanner,
        'leadership.members': Members,
        'leadership.extraLinks': ExtraLinks
      })}
    </main>
  )
}
