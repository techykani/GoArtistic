export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

declare global {
  interface Window {
    dataLayer: any
  }
}

export const gtmVirtualPageView = (rest: any) => {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest,
  })
}
