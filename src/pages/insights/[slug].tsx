import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { pageQuery } from '@/lib/query'
import { renderObjectArray } from 'sanity-react-extra'
import { Hero } from '@/components/article-content/hero'
import { ImageTitleDesc } from '@/components/article-content/imageTitleDesc'
import { Source } from '@/components/article-content/source'
import { ContactUs } from '@/components/article-content/contactUs'
import { VideoTitleDesc } from '@/components/article-content/videoTitleDesc'
import { Table } from '@/components/article-content/table'
import { Cards } from '@/components/article-content/cards'
import { Podcast } from '@/components/article-content/podcast'
import { NewsInterested } from '@/components/article-content/newsInterested'
import { useCallback } from 'react'

const query = pageQuery(groq`
   *[_type == "insights" && slug.current == $slug][0] {
            ...,
    "sameMedia":  *[_type == "insights" && slug.current != $slug] {
							_id,
							title,
							"slug":slug.current,
              calendar,
              primaryImg,
              tag
						}

	}`)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'insights' && defined(slug.current)][].slug.current`
  const slug = context?.params?.slug
  const paths: string[] = await sanityClient('anonymous').fetch(pathsQuery)
  const page = paths.find((path) => path === slug)

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: await sanityStaticProps({
      context,
      query,

      params: {
        locale: 'en',
        defaultLocale: 'en',
        slug: slug,
      },
    }),
  }
}

export default function Details(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data
  const { sections } = page
  return (
    <main className="overflow-visible">
      <Hero page={page} />
      {page?.sections && (
        <>
          {renderObjectArray(sections, {
            'article.imageTitleDescription': ImageTitleDesc,
            'article.videoTitleDescription': VideoTitleDesc,
            titleTable: Table,
            'article.cards': Cards,
            'article.podcast': Podcast,
            'article.source': Source,
            'article.articleContact': ContactUs,
            // eslint-disable-next-line react-hooks/rules-of-hooks
            'article.intrestedIn': useCallback(
              (props: any) => (
                <NewsInterested
                  title={props.title}
                  cta={props.link}
                  slidesData={page.sameMedia}
                  // route={ROUTES.PACKAGES}
                />
              ),
              [page.sameMedia],
            ),
          })}
        </>
      )}
    </main>
  )
}
