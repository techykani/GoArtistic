import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { googleMapsInput } from '@sanity/google-maps-input'
import { table } from '@sanity/table'
import { documentInternationalization } from '@sanity/document-internationalization'
import deskToolnew from './utils/deskStructure'
import { visionTool } from '@sanity/vision'
import HelloWorldBadge, { SetReviewAction, SetApproveAction } from './utils/action'
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET

const i18nSchemaTypes = ['homePage', 'exploreOurService', 'site']

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'HMI Sanity | Medical ',
  projectId: `${PROJECT_ID}`,
  dataset: `${DATASET}`,
  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {
          title: 'English',
          id: 'en-my',
        },
        {
          title: 'Malay',
          id: 'bm-my',
        },
        {
          title: 'Chinese',
          id: 'zh-my',
        },
        {
          title: 'Indonesia',
          id: 'id-id',
        },
      ],
      schemaTypes: i18nSchemaTypes,
    }),
    deskTool({
      structure: (S, { schema }) => deskToolnew(S, schema),
    }),
    visionTool({
      defaultDataset: 'development',
    }),
    table(),
    googleMapsInput({
      apiKey: 'something',
    }),
  ],
  schema: {
    // @ts-ignore
    types: schemaTypes,
    templates: (prev) => prev.filter((template) => !i18nSchemaTypes.includes(template.id)),
  },
  document: {
    actions: function (prev, context) {
      // console.log('context: ', context);
      const userRoles = context.currentUser?.roles
      const isDeveloper = userRoles?.some((role) => role.name === 'developer')
      return isDeveloper ? [...prev, SetReviewAction] : prev
    },
  },
})
