import { createClient } from 'next-sanity'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Couldn't find env var NEXT_PUBLIC_SANITY_PROJECT_ID!")
}
if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Couldn't find env var NEXT_PUBLIC_SANITY_DATASET")
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-10-21',
})
