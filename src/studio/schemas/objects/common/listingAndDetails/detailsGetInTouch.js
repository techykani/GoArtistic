import { AiOutlineQuestion } from 'react-icons/ai'

export default {
  name: 'details.common.getInTouch',
  title: 'Get In Touch',
  type: 'object',
  icon: AiOutlineQuestion,
  fields: [
    { name: 'title', title: 'Title', type: 'string', initialValue: 'Have question?' },
    { name: 'cta', title: 'CTA', type: 'ctaButton' },
  ],
}
