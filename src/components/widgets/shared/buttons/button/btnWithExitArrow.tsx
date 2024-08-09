import { GTAEvent } from '@/lib/gtag'
import Link from 'next/link'

interface btnWithExitArrow {
  link: CTALink
  target: '_self' | '_blank' | '_parent' | '_top'
  btnType: 'primary' | 'secondary' | 'tertiary'
  arrowVisibility: boolean

  theme: 'light' | 'dark'
  customStyle: string
  size: 'medium' | 'small'
  arrowColor: 'white' | 'blue' | 'black'
  gtag_event: string
  gtag_content_name: string
  gtag_content_type: string
  gtag_cta_button: string
  rel: string
}

interface CTALink {
  href: string
  text: string
}

const BtnWithExitArrow = ({
  link,
  target,
  btnType,
  arrowVisibility,
  customStyle,
  theme,
  size,
  arrowColor,
  gtag_event,
  gtag_content_name,
  gtag_content_type,
  gtag_cta_button,
  rel = '',
}: btnWithExitArrow) => {
  const handleButton = (
    gtag_event: any,
    gtag_content_name: any,
    gtag_content_type: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      content_name: gtag_content_name !== '' ? gtag_content_name : null,
      content_type: gtag_content_type !== '' ? gtag_content_type : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }
  return (
    <>
      {link?.text && (
        <Link
          href={link?.href ?? ''}
          rel={rel}
          onClick={() =>
            handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
          }
          target={target}
          className={`btn_${btnType}_${size}-${theme} font-semibold rounded-full leading-[20px] ${
            btnType !== 'tertiary' && ' justify-center'
          } gap-2 flex items-center group ${customStyle}`}
        >
          {link?.text}
          {arrowVisibility && (
            <>
              {arrowColor == 'blue' && (
                <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M3.83331 10H17.1666M17.1666 10L12.1666 5M17.1666 10L12.1666 15"
                      stroke="#0957CB"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
              {arrowColor == 'white' && (
                <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8925 6.89459C15.283 6.50406 15.9162 6.50405 16.3067 6.89457L20.7052 11.2929C20.8927 11.4804 20.9981 11.7348 20.9981 12C20.9981 12.2652 20.8927 12.5196 20.7052 12.7071L16.3067 17.1056C15.9162 17.4961 15.283 17.4961 14.8925 17.1056C14.502 16.7151 14.502 16.0819 14.8925 15.6914L17.5839 13H3.99805C3.44576 13 2.99805 12.5523 2.99805 12C2.99805 11.4477 3.44576 11 3.99805 11H17.5838L14.8925 8.3088C14.502 7.91829 14.502 7.28512 14.8925 6.89459Z"
                      fill="#FEFEFE"
                    />
                  </svg>
                </div>
              )}
              {arrowColor == 'black' && (
                <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M12.25 5.25L12.25 1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0593C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26342 12.25 9.75347 12.25 10.1278 12.0593C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                      stroke="#5A5A5A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </>
          )}
        </Link>
      )}
    </>
  )
}

export default BtnWithExitArrow
