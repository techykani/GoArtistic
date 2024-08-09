import { Button, LinkAngleRight } from '@/components/ui'
import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { pageQuery } from '@/lib/query'
import { imageUrlBuilder, sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { SanityImg } from 'sanity-react-extra'

const query = pageQuery(groq`
  *[_type == "siteMaintenance"][0]
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

const SiteMaintenance = (props: SanityProps) => {
  const { page } = useSanityQuery(query, props).data
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      {page && (
        <main className="w-full md:min-h-[700px] bg-[#F1F8FA]  flex flex-col md:flex-row md:items-center pt-[33px] lg:pt-0 relative">
          <div className="max-w-[251px] lg:max-w-[375px] ml-6 md:ml-[71px] lg:ml-[175px] relative z-50">
            <div className="w-full">
              {page.tagline && (
                // <h1 className="text-primary-blue text-[28px] lg:text-[36px] font-semibold leading-[36px] lg:leading-[44px] tracking-[-0.28px] lg:tracking-[-0.36px]">
                //   {page.tagline}{' '}
                // </h1>
                <Title headingType="h2" tagline={page.tagline} theme="light" className=" mb-2" />
              )}
              {page.button && (
                <div className="mt-[20px] lg:mt-[30px] flex ">
                  <Button className="btn_primary_medium-light font-semibold rounded-full leading-[20px] justify-center gap-2 flex items-center !px-10 !md:py-4">
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
              )}
            </div>
          </div>
          {page.desktopImg || page.mobileImg ? (
            <div className="w-full mt-[-65px] md:absolute md:right-0 md:bottom-0">
              <SanityImg
                builder={imageUrlBuilder}
                image={windowWidth > 768 ? page.desktopImg : page.mobileImg}
                width={400}
                alt={windowWidth > 768 ? page.desktopImg.alt : page.mobileImg?.alt ?? 'image'}
                loading="eager"
                className="w-full lg:w-[1184px] ml-auto"
              />
            </div>
          ) : (
            ''
          )}
        </main>
      )}
    </>
  )
}

export default SiteMaintenance
