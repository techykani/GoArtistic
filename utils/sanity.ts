import { setupNextSanity } from 'next-sanity-extra'
import { createClient } from 'next-sanity'

// Standard sanity config
// Don't forget:
// Setup SANITY_API_TOKEN (created from sanity admin)
/// Set SANITY_PREVIEW_TOKEN (generate this yourself)

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Couldn't find env var NEXT_PUBLIC_SANITY_PROJECT_ID!")
}
if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Couldn't find env var NEXT_PUBLIC_SANITY_DATASET")
}

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-21',
}

export const { sanityClient, imageUrlBuilder, PortableText, sanityStaticProps, useSanityQuery } =
  setupNextSanity(config)

export const SanityCDNReadClient = createClient(config).withConfig({
  useCdn: false,
})
