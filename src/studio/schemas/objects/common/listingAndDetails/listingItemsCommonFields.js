import { MdOutlineMedicalServices } from 'react-icons/md'
import { isUniqueOtherThanLanguage } from '../../common/isUniqueOtherThanLanguage'

export default {
  name: 'listingItem.common.info',
  title: 'Medical Specialties',
  type: 'document',
  icon: MdOutlineMedicalServices,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        isUnique: isUniqueOtherThanLanguage,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'This image is for the details page',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    },
    {
      name: 'smImage',
      title: 'Small Image',
      type: 'image',
      description: 'This image is for the list item cards',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    },
    {
      name: 'getInTouch',
      title: 'Get In Touch',
      type: 'details.common.getInTouch',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'smImage',
    },
  },
}
