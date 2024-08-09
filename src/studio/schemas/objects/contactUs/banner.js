import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'contactUsPage.banner',
  title: 'Banner',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'Image',
      title: 'Banner Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Banner Description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'primaryImg',
    },
  },
}
