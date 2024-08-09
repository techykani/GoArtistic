import { pageQuery } from '@/lib/query'
import { groq } from 'next-sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { imageUrlBuilder, sanityStaticProps, useSanityQuery } from '@/sanity'
import { SanityProps } from 'next-sanity-extra'
import Link from 'next/link'
import Title from '@/components/widgets/shared/title'
import { Button, LinkAngleRight } from '@/components/ui'
import { SanityImg } from 'sanity-react-extra'
import { useWindowSize } from '@/lib/hooks'

const query = pageQuery(groq`
  *[_type == "page404"][0]
  `)
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
export default function Custom404(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data

  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <main className="w-full h-screen flex justify-center items-center bg-[#F1F8FA] pl-[15px] md:pl-0">
      <div className="max-w-[218px] md:max-w-[461px] mx-auto relative mt-[-60px]">
        <div className="absolute w-[170px] md:w-[252px] top-[-123px] md:top-[-180px] left-[-70px] md:left-[-110px]">
          <SanityImg
            builder={imageUrlBuilder}
            image={windowWidth > 768 ? page.desktopImg : page.mobileImg}
            width={400}
            alt={windowWidth > 768 ? page.desktopImg.alt : page.mobileImg?.alt ?? 'image'}
            loading="eager"
            className=""
          />
        </div>
        {/* <h1 className="text-primary-blue text-center text-[48px] font-semibold leading-[56px] tracking-[-0.48px]">
          {page.title}
        </h1> */}
        <Title headingType="h2" tagline={page.title} theme="light" className="text-center mb-2" />

        <p className="text-grey-9 text-[16px] leading-[24px] mb-2 md:mb-4 text-center">
          {page.tagline}
        </p>
        <div className="mt-[15px] flex justify-center">
          <Button className="btn_primary_medium-light font-semibold rounded-full leading-[20px] justify-center gap-2 flex items-center !md:px-10 !md:py-4">
            <LinkAngleRight
              href={page.button?.href}
              color="white"
              gtag_event="select_content"
              gtag_content_name={page?.tagline}
              gtag_content_type={page?.title}
              gtag_cta_button={page.button.title}
            >
              {page.button.title}{' '}
            </LinkAngleRight>
          </Button>
        </div>
      </div>
    </main>
  )
}
