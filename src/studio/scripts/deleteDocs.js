import { getCliClient } from 'sanity/cli'

// This will use the client configured in ./sanity.cli.ts
const client = getCliClient()

client
  .delete({ query: '*[language == "BM" && defined(language)][0...999]' })
  .then(console.log)
  .catch(console.error)
