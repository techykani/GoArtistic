import { OrderList } from 'primereact/orderlist'
import PortableText from 'react-portable-text'

const HEADING_1 = ''
const HEADING_2 = ''
const HEADING_3 = ''
const HEADING_4 = ''
const UNORDERED_LIST = 'pt-6 list-disc pl-5'
const ORDERED_LIST = 'pt-6 pl-5 list-decimal'
const LIST = 'text-[#6E6E6E]  leading-[24px]'
const PARA = 'text-[#6E6E6E]  leading-[24px] pt-6'
const LINK = 'text-[#6E6E6E]  leading-[24px] font-semibold hover:underline'
const EMPHASIS = 'text-[#6E6E6E] semibold leading-[24px] pt-6'

const ReactPortableText = ({ content, theme, customClass }: any) => {
  return (
    <>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={content}
        serializers={{
          h1: (props: any) => <h1 className={HEADING_1} {...props} />,
          h2: (props: any) => <h2 className={HEADING_2} {...props} />,
          h3: (props: any) => <h3 className={HEADING_3} {...props} />,
          h4: (props: any) => <h3 className={HEADING_4} {...props} />,
          li: ({ children }: any) => (
            <li className={`${LIST} ${theme == 'dark' && '!text-off-white'} ${customClass}`}>
              {children}
            </li>
          ),
          ul: ({ children }: any) => (
            <ul
              className={`${UNORDERED_LIST} ${theme == 'dark' && '!text-off-white'} ${customClass}`}
            >
              {children}
            </ul>
          ),
          ol: ({ children }: any) => (
            <ol
              className={`${ORDERED_LIST} ${theme == 'dark' && '!text-off-white'} ${customClass}`}
            >
              {children}
            </ol>
          ),
          link: ({ href, children }: any) => (
            <a
              href={href}
              className={`${LINK} ${theme == 'dark' ? '!text-off-white' : '!text-[#0084C6]'
                } ${customClass}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          normal: (props: any) => (
            <p
              className={`${PARA} ${theme == 'dark' && '!text-off-white'} ${customClass}`}
              {...props}
            />
          ),
          em: (props: any) => (
            <em className={`${EMPHASIS} ${theme == 'dark' && '!text-off-white'} ${customClass}`}>
              {props.children}
            </em>
          ),
        }}
      />
    </>
  )
}

export default ReactPortableText
