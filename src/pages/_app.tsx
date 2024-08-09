import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/primereact.css'
import { ManagedUIContext } from '@/contexts/ui.context'
import Container from '@/layouts/container'
import '../styles/carousel.css'
import 'react-phone-number-input/style.css'
import '../styles/globals.css'
import '../styles/index.scss'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { pageview } from '@/lib/gtag'
import { gtmVirtualPageView } from '@/lib/gtm'
import { imageUrlBuilder } from '@/sanity'
import { Scripts } from '@/components/scripts'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const queryClient = new QueryClient()
declare global {
  interface Window {
    Weglot: any
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps, 'pageprops')
  const router = useRouter()

  // useEffect(() => {
  //   const pathsToExclude = [
  //     '/clinics',
  //     '/doctors',
  //     '/services/health-screening',
  //     '/media#News',
  //     '/media',
  //     '/studio',
  //   ] // Add more paths as needed
  //   const isRootRoute = window.location.pathname === '/'
  //   const shouldLoadScript = !pathsToExclude.includes(router.pathname) || isRootRoute
  //   if (shouldLoadScript) {
  //     // Load the script
  //     const script = document.createElement('script')
  //     script.src = 'https://cdn.weglot.com/weglot.min.js'
  //     script.async = true
  //     document.body.appendChild(script)
  //     // Initialize the script
  //     script.onload = () => {
  //       window.Weglot.initialize({
  //         api_key: 'wg_5ea6dace2d9e8b4f1ed21de4228df15f9',
  //       })
  //     }
  //     // Load the stylesheet
  //     const stylesheet = document.createElement('link')
  //     stylesheet.rel = 'stylesheet'
  //     stylesheet.type = 'text/css'
  //     stylesheet.href = 'https://cdn.weglot.com/weglot.min.css?v=5'
  //     document.head.appendChild(stylesheet)
  //     var weglotContainer = document.querySelector('.weglot-container.wg-default') as HTMLElement
  //     if (weglotContainer) {
  //       weglotContainer.style.display = ''
  //     }
  //   } else {
  //     // Unload the script
  //     var script = document.querySelector('[src="https://cdn.weglot.com/weglot.min.js"]')
  //     if (script) {
  //       script.remove()
  //     }
  //     // Remove the Weglot stylesheet when navigating away
  //     var stylesheet = document.querySelector('[href="https://cdn.weglot.com/weglot.min.css?v=5"]')
  //     if (stylesheet) {
  //       stylesheet.remove()
  //     }

  //     // Unload the stylesheet
  //     var weglotContainer = document.querySelector('.weglot-container.wg-default') as HTMLElement
  //     if (weglotContainer) {
  //       weglotContainer.style.display = 'none'
  //     }
  //   }
  // })

  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps?.data?.page?._type || null,
      url: router.pathname,
    }

    const handleRouteChange = (url: URL) => {
      pageview(url)
    }

    gtmVirtualPageView(mainDataLayer)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [pageProps, router.pathname, router.events])

  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

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
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  if (pageProps?.data?.page?.noLayout) return <Component {...pageProps} />
  // useAnalytic(pageProps)
  return (
    <ManagedUIContext>
      <div>
        <Head>
          <link rel="icon" type="image/png" href={pageProps.data?.site.favicon} />
          <meta name="robots" content="follow, index" />
          <meta property="og:type" content="website" />
        </Head>
        <NextSeo
          title={pageProps.data?.page?.seo?.title}
          description={pageProps.data?.page?.seo?.description}
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
            title: pageProps.data?.page?.seo?.title,
            description: pageProps.data?.page?.seo?.description,
            images: openGraphImages,
          }}
        />
        <Scripts />
      </div>
      <Container pageProps={pageProps}>
        <QueryClientProvider client={queryClient}>
          {/* <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider> */}
          <PrimeReactProvider>
            <Component {...pageProps} />
          </PrimeReactProvider>
        </QueryClientProvider>
      </Container>
    </ManagedUIContext>
  )
}
export default MyApp
