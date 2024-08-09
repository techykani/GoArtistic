export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/gtagjs/reference/event#screen_view
export const GTAEvent  = (action: string, parameters: Record<string, string>) =>
  window.gtag('event', action, parameters)
