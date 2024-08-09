import { GTM_ID } from '@/lib/gtm'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Scripts } from '@/components/scripts'
import Script from 'next/script'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-my">
        <Head></Head>
        <body>
          <Main />
          <NextScript />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Script
            id="hs-script-loader"
            strategy="afterInteractive"
            src="//js.hs-scripts.com/8455804.js"
          />
        </body>
      </Html>
    )
  }
}
export default MyDocument
