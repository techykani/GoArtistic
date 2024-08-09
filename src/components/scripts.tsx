import { GA_TRACKING_ID } from '@/lib/gtag'
import { GTM_ID } from '@/lib/gtm'
import Script from 'next/script'

export const GoogleAnalytics = () => (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <Script id="gtag-tag">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `}</Script>
  </>
)

export const GoogleTagManagerTwo = () => (
  <>
    <Script id="google-tag-manager-two">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}')`}
    </Script>
  </>
)

export const FreshChat = () => (
  <>
    <Script type="text/javascript" id="fc-widget">
      {`function initFreshChat() {
 window.fcWidget.init({
 token: "${process.env.NEXT_PUBLIC_FRESH_CHAT_TOKEN}",
 host: "https://healthmanagementinternationalpte-org.freshchat.com"
 });
}

function initialize(i, t) {
 var e;
 if (i.getElementById(t)) {
 initFreshChat();
 } else {
 e = i.createElement("script");
 e.id = t;
 e.async = true;
 e.src = "https://healthmanagementinternationalpte-org.freshchat.com/js/widget.js";
 e.onload = initFreshChat;
 i.head.appendChild(e);
 }
}

function initiateCall() {
 initialize(document, "Freshchat-js-sdk");
}



if (window.addEventListener) {
 window.addEventListener("load", initiateCall, false);
} else {
 window.attachEvent("load", initiateCall, false);
}`}
    </Script>
  </>
)

export const Scripts = () => {
  return (
    <div>
      <GoogleAnalytics />
      <GoogleTagManagerTwo />
      {/* <FreshChat /> */}
    </div>
  )
}
