import { TbFileSearch } from 'react-icons/tb'

export default {
  name: 'search.searchContent',
  title: 'Search Content',
  type: 'object',
  icon: TbFileSearch,
  fields: [
    {
      name: 'textWhenNoSearch',
      title: 'Text when no search is done',
      type: 'string',
    },
    {
      name: 'inputPlaceholder',
      title: 'Search field placeholder',
      type: 'string',
    },
    {
      name: 'searchResultText',
      title: 'Search Result Text',
      description: 'Content to show when search gives a results, e.g showing 15 results.',
      type: 'string',
    },
    {
      name: 'noSearchResultText',
      title: 'No Search Resutl Text',
      description: 'Content to show when no results found',
      type: 'string',
    },
    {
      name: 'seeMoreButtonText',
      title: 'See More Button Text',
      description: 'Show right see more text for individual search result. Order is very important',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'seeLessButtonText',
      title: 'See Less Button Text',
      description: 'Show right see less text for individual search result. Order is very important',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tabParameters',
      title: 'Tab Parameters',
      description:
        'Order is very important, keep the same order when you trnslate in another language',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'searchResultSectionTitle',
      title: 'Search Result Title',
      type: 'string',
    },
    {
      name: 'sortParametersByText',
      title: 'Sort Parameters based on Text',
      description:
        'Order is very important, keep the same order when you trnslate in another language',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sortParametersByDate',
      title: 'Sort Parameters based on Date',
      description:
        'Order is very important, keep the same order when you trnslate in another language',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Search parameters & contents',
      }
    },
  },
}
