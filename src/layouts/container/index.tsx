import { Footer } from '@/components/footer/footer'
// import SmNavigation from '@/components/navbar/mobile-navigation/mobile-navigation'
import { Navbar, BottomNavigation } from '@/components/navbar'
import { Scripts } from '@/components/scripts'
import { imageUrlBuilder } from '@/sanity'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { withDimensions } from 'sanity-react-extra'
import { groq } from 'next-sanity'
import { SanityCDNReadClient } from '../../../utils/sanity'
import { Header } from '@/components/navbar/header'
import { MobileFooter } from '@/components/footer/mobile-footer/mobile-footer'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'

interface Props {
  children: React.ReactNode
  pageProps: any
}
const inter = Inter({ subsets: ['latin'] })

// const query = pageQuery(groq`
//    *[_type == 'site'][0] && language == 'en-my' {
//     ...,
//   "logo": ${withDimensions('logo')},
//   "favicon" : favicon.asset->url,
//   contact {
//     ...,
//     "icon": ${withDimensions('icon')},
//   },
//   emergency {
//     ...,
//     "icon": ${withDimensions('icon')},
//   },
//   navTop {
//     ...,
//     location {
//       ...,
//       "icon": icon.asset->url,
//     },
//     language {
//       ...,
//       "icon":icon.asset->url,
//     },
//   },

//   footer {
//     ...,
//     address {
//       ...,
//       iconLinks[] {
//         ...,
//         "icon": ${withDimensions('icon')},
//       }
//     },
//     downloadAppLink {
//       ...,
//       iconLinks[] {
//         ...,
//         "icon": ${withDimensions('icon')},
//       }
//     },
//     footerBottom[] {
//           ...,

//             "icon": ${withDimensions('icon')},
//           }
//   },
//   notificationBar {
//     ...,
//     "icon": ${withDimensions('icon')},
//   },
//   }`)

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => ({
//   props: await sanityStaticProps({
//     context,
//     query,
//     params: {
//       locale: 'en-my',
//       defaultLocale: 'en-my',
//     },
//   }),
//   revalidate: 10,
// })

export default function Container({ children, pageProps }: Props) {
  const router = useRouter()
  const [navbarActive, setNavbarActive] = useState(false)
  const origin = process.env.NEXT_PUBLIC_DOMAIN
  const ogImage = pageProps.data?.page?.seo?.seoImage ?? pageProps.data?.site.ogImage
  const openGraphImages = ogImage
    ? [
      { w: 800, h: 600 },
      { w: 1200, h: 630 },
      { w: 600, h: 600 },
      { w: 256, h: 256 },
    ].map(({ w, h }) => ({
      url: `${imageUrlBuilder.image(ogImage).width(w).height(h).url()}`,
      width: w,
      height: h,
      alt: `${pageProps.data?.page?.seo?.title}`,
    }))
    : []

  // const [menuList, setMenuList]: any = useState(null)

  // const { data }: any = useSanityQuery(query, pageProps)

  const { pathname } = router

  const environment = process.env.NEXT_PUBLIC_ENV;

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    if (environment === "staging") {
      if (auth) {
        const authData = JSON.parse(auth);
        if (!authData.authenticated || (new Date().getTime() - authData.timestamp > oneDay)) {
          localStorage.removeItem('auth'); // Remove expired auth data
          router.replace('/login');
        }
      } else {
        router.replace('/login');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setMenuList(data?.site)
  // }, [data?.site])

  // useEffect(() => {
  // if (pathname.startsWith('/doctors/')) {
  //   setMenuList(pageProps?.doctorProps?.data?.site)
  // }
  // }, [pageProps?.doctorProps?.data?.site, pathname])

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  // if (!menuList) {
  //   return null
  // }

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={pageProps.data?.site?.favicon} />
        <meta name="robots" content="follow, index" />
        <meta property="og:type" content="website" />
        {/* <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>{' '}
      {(pageProps.data?.site || pageProps?.doctorProps?.data) && (
        <NextSeo
          title={
            pathname.startsWith('/doctors/')
              ? pageProps?.doctorProps.data?.seo?.title
              : pageProps.data?.page?.seo?.title
          }
          description={
            pathname.startsWith('/doctors/')
              ? pageProps?.doctorProps.data?.seo?.description
              : pageProps.data?.page?.seo?.description
          }
          canonical={`${currentUrl}`}
          languageAlternates={[
            {
              hrefLang: 'x-default',
              href: `${currentUrl}`,
            },
          ]}
          noindex={process.env.NEXT_PUBLIC_ENV === 'production' ? false : true}
          nofollow={process.env.NEXT_PUBLIC_ENV === 'production' ? false : true}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
          robotsProps={{
            nosnippet: false,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: 'none',
            maxVideoPreview: -1,
          }}
          openGraph={{
            title: pathname.startsWith('/doctors/')
              ? pageProps?.doctorProps.data?.seo?.title
              : pageProps.data?.page?.seo?.title,
            description: pathname.startsWith('/doctors/')
              ? pageProps?.doctorProps.data?.seo?.description
              : pageProps.data?.page?.seo?.description,
            images: openGraphImages,
          }}
        />
      )}
      <Scripts />
      <div className={`relative ${inter.className}`}>
        <div className="sticky top-0 z-[1000]">
          {(pageProps.data?.site || pageProps?.doctorProps?.data?.site) && (
            <Header
              site={
                pathname.startsWith('/doctors/')
                  ? pageProps?.doctorProps?.data?.site
                  : pageProps.data?.site
              }
            />
          )}
          {(pageProps.data?.site || pageProps?.doctorProps?.data?.site) && (
            <Navbar
              site={
                pathname.startsWith('/doctors/')
                  ? pageProps?.doctorProps?.data?.site
                  : pageProps.data?.site
              }
            />
          )}
        </div>

        {(pageProps.data?.site || pageProps?.doctorProps?.data?.site) && (
          <BottomNavigation
            site={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site
                : pageProps.data?.site
            }
            setNavbarActive={setNavbarActive}
            navbarActive={navbarActive}
          />
        )}
        {children}
        {(pageProps.data?.site || pageProps?.doctorProps?.data?.site) && (
          <Footer
            data={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.footer
                : pageProps.data?.site?.footer
            }
            primaryMenu={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.primaryMenu
                : pageProps.data?.site?.primaryMenu
            }
            secondaryMenu={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.secondaryMenu
                : pageProps.data?.site?.secondaryMenu
            }
            footerSections={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.footerSections
                : pageProps.data?.site?.footerSections
            }
            logo={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.logo
                : pageProps.data?.site?.logo
            }
            ctaButton={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.ctaButton
                : pageProps.data?.site?.ctaButton
            }
          />
        )}
        {(pageProps.data?.site || pageProps?.doctorProps?.data?.site) && (
          <MobileFooter
            data={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.footer
                : pageProps.data?.site?.footer
            }
            primaryMenu={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.primaryMenu
                : pageProps.data?.site?.primaryMenu
            }
            secondaryMenu={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.secondaryMenu
                : pageProps.data?.site?.secondaryMenu
            }
            footerSections={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.footerSections
                : pageProps.data?.site?.footerSections
            }
            logo={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.logo
                : pageProps.data?.site?.logo
            }
            ctaButton={
              pathname.startsWith('/doctors/')
                ? pageProps?.doctorProps?.data?.site?.ctaButton
                : pageProps.data?.site?.ctaButton
            }
          />
        )}
      </div>
    </>
  )
}
