import Link from 'next/link'
import { PortableText } from '@/sanity'

export const serializers = {
  types: {
    video: function Video(props: any) {
      return (
        <video className="my-5" controls>
          <source src={props.node.asset.url} type={props.node.asset.mimeType} />
        </video>
      )
    },
    image: function Image(props: any) {
      const { asset, alt } = props.node
      return (
        <div className="mt-7">
          <img src={asset.url} alt={alt} className="object-cover w-full h-auto" />
        </div>
      )
    },
    card: (props: any) => {
      const { data, mainLink } = props.node

      return (
        <div className="bg-[#F0E8DD99] rounded-lg py-6 px-4 md:py-5 md:px-[34px] font-inter mt-6">
          <PortableText blocks={data} />
          {mainLink && (
            <a
              className="inline-flex items-center font-semibold leading-none mt-7 group text-copper-500"
              href={mainLink.href}
            >
              {mainLink.text}
              <span className="transform inline-block transition-all duration-150 group-hover:translate-x-1 ml-[6px]">
                {'>'}
              </span>
            </a>
          )}
        </div>
      )
    },
  },
  marks: {
    sup: ({ children }: any) => <sup>{children}</sup>,
    pop: ({ children }: any) => <span className="text-copper-200">{children}</span>,
    link: ({ children, mark }: any) =>
      mark.onMobile ? (
        <>
          <span className="hidden lg:inline-block" style={{ color: mark.color ?? 'inherit' }}>
            {children}
          </span>
          <span className="inline-block lg:hidden">
            <Link href={mark.href} style={{ color: mark.color ?? '#3C3C3C' }}>
              {children}
            </Link>
          </span>
        </>
      ) : (
        <>
          {mark.href.indexOf('http') !== 0 ? (
            <Link
              href={mark.href}
              style={{
                color: mark.color ? mark.color : '#3C3C3C',
                wordSpacing: mark.haveWordSpacing ? 0 : '-0.3em',
                wordBreak: 'break-all',
              }}
            >
              {children}link
            </Link>
          ) : (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={mark.href}
              style={{
                color: mark.color ? mark.color : '#3C3C3C',
                wordSpacing: mark.haveWordSpacing ? 0 : '-0.3em',
                wordBreak: 'break-all',
              }}
            >
              {children}
            </a>
          )}
        </>
      ),
    primaryLink: ({ children, mark }: any) => {
      return (
        <a
          style={{
            color: mark.color ? mark.color : 'inherit',
          }}
          className="inline-flex items-center font-semibold leading-none group"
          href={mark.href}
          target={mark.href.indexOf('http') !== 0 ? '_self' : '_blank'}
          rel={mark.href.indexOf('http') !== 0 ? '' : 'noopener noreferrer'}
        >
          {children}
          <span className="transform inline-block transition-all duration-150 group-hover:translate-x-1 ml-[6px]">
            <svg
              width="4"
              height="8"
              viewBox="0 0 4 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.92126 4.18565C4.02625 4.07644 4.02625 3.92356 3.92126 3.81435L0.855643 0.581903C0.750656 0.472699 0.582677 0.472699 0.498688 0.581903L0.0787402 1.01872C-0.0262467 1.10608 -0.0262467 1.28081 0.0787402 1.39002L2.55643 3.98908L0.0787402 6.60998C-0.0262467 6.71919 -0.0262467 6.87207 0.0787402 6.98128L0.498688 7.4181C0.582677 7.5273 0.750656 7.5273 0.855643 7.4181L3.92126 4.18565Z"
                fill="#A78148"
              />
            </svg>
          </span>
        </a>
      )
    },
    secondaryLink: ({ children, mark }: any) => {
      return (
        <a
          style={{
            color: mark.color ? mark.color : 'inherit',
          }}
          className="inline-flex items-center mt-1 font-semibold leading-none transition-colors duration-150 group lg:ml-1 text-button-mn lg:mt-0"
          href={mark.href}
          target={mark.href.indexOf('http') !== 0 ? '_self' : '_blank'}
          rel={mark.href.indexOf('http') !== 0 ? '' : 'noopener noreferrer'}
        >
          {children}
          <span className="inline-block transition-all duration-150 transform group-hover:translate-x-1">
            <svg
              className="ml-[6px] fill-neutral-700"
              width="4"
              height="7"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.84252 7.37129C8.05249 7.15289 8.05249 6.84711 7.84252 6.62871L1.71129 0.163807C1.50131 -0.0546022 1.16535 -0.0546022 0.997375 0.163807L0.15748 1.03744C-0.0524934 1.21217 -0.0524934 1.56162 0.15748 1.78003L5.11286 6.97816L0.15748 12.22C-0.0524934 12.4384 -0.0524934 12.7441 0.15748 12.9626L0.997375 13.8362C1.16535 14.0546 1.50131 14.0546 1.71129 13.8362L7.84252 7.37129Z"
                fill="#212932"
              />
            </svg>
          </span>
        </a>
      )
    },
    customFont: (props: any) => {
      const { children, mark } = props
      const { size, weight, marginBottom, marginTop, color } = mark
      return (
        <span
          style={{
            fontSize: size ? `${size}px` : '1em',
            fontWeight: weight ? weight : 400,
            marginTop: marginTop ? `${marginTop}px` : '0',
            marginBottom: marginBottom ? `${marginBottom}px` : '0',
            color: color ? color : 'inherit',
            display: 'inline-block',
          }}
        >
          {children}
        </span>
      )
    },
    uploadFile: (props: any) => {
      const baseURL = 'https://cdn.sanity.io/files/'
      const fileName = `${props.mark.asset._ref.split('-')[1]}.${
        props.mark.asset._ref.split('-')[2]
      }`
      const downloadURL = `${baseURL}${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${fileName}?dl`

      return (
        <span>
          <a href={downloadURL} className="underline text-link">
            {props.children}
          </a>
        </span>
      )
    },
  },
  list: (props: any) => {
    const { type, level } = props
    const number = type === 'number'
    const tab = 8 //change it to change the indentation of nested lists
    if (number) {
      return (
        <ol className="my-4 space-y-3 list-inside" style={{ marginLeft: `${tab * (level - 1)}px` }}>
          {props.children}
        </ol>
      )
    }
    return (
      <ul className="my-4 space-y-3 list-inside" style={{ marginLeft: `${tab * (level - 1)}px` }}>
        {props.children}
      </ul>
    )
  },
  listItem: (props: any) => {
    const { listItem } = props.node
    const number = listItem === 'number'
    if (number) {
      return (
        <li className="flex items-start flex-grow-0 flex-shrink-0 ml-1 lg:ml-3">
          <span className="w-6 h-6 bg-copper-90 text-copper-600 rounded-full mr-2 relative top-0.5 flex items-center justify-center p-3">
            {props.index + 1}
          </span>
          <span>{props.children}</span>
        </li>
      )
    }
    return (
      <li className="flex items-start flex-grow-0 flex-shrink-0 ml-3 lg:ml-5">
        <span className="w-1.5 h-1.5 bg-copper-200 rounded-full mr-2 relative top-[9px] shrink-0" />
        <span>{props.children}</span>
      </li>
    )
  },
}

const { listItem, list, ...mutantSerializer } = serializers
const modObj = {
  list: (props: any) => {
    const { type } = props
    const number = type === 'number'
    if (number) {
      return <ol className="my-4 space-y-1 list-inside">{props.children}</ol>
    }
    return <ul className="mb-5 space-y-3 list-inside">{props.children}</ul>
  },
  listItem: (props: any) => {
    const { listItem } = props.node
    const number = listItem === 'number'
    if (number) {
      return (
        <li className="flex items-start flex-grow-0 flex-shrink-0 ml-1 lg:ml-3">
          <span className="relative flex items-center justify-center w-6 h-6 p-3 mr-2 rounded-full">
            {props.index + 1}.
          </span>
          <div>{props.children}</div>
        </li>
      )
    }
    return (
      <li className="flex items-start flex-grow-0 flex-shrink-0 ml-3 lg:ml-5">
        <span className="w-1.5 h-1.5 bg-copper-200 rounded-full mr-2 relative top-[9px] shrink-0" />
        <span>{props.children}</span>
      </li>
    )
  },
}
Object.assign(mutantSerializer, modObj)
export { mutantSerializer }
