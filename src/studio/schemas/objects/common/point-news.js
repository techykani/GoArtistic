import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'pointNews',
  title: 'Quick Links',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
    {
      name: 'Icon',
      title: 'Desktop Icon',
      type: 'image',
    },
    {
      name: 'video',
      type: 'file',
      title: 'MP4 - MPEG4',
      accept: 'video/mp4',
    },
  ],
  preview: {
    select: {
      title: 'subTitle',
      subtitle: 'shortDes',
    },
  },
}
