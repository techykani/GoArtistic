import { GTAEvent } from '@/lib/gtag'
import Link from 'next/link'

interface BtnWithArrowProps {
  link: CTALink
  target: '_self' | '_blank' | '_parent' | '_top'
  btnType: 'primary' | 'secondary' | 'tertiary'
  arrowVisibility: boolean

  theme: 'light' | 'dark'
  customStyle: string
  size: 'medium' | 'small'
  arrowColor: 'white' | 'blue' | 'black'
  gtag_event: string
  form_name: string
}

interface CTALink {
  href: string
  text: string
}

const BtnWithArrowEnquiry = ({
  link,
  target,
  btnType,
  arrowVisibility,
  customStyle,
  theme,
  size,
  arrowColor,
  gtag_event,
  form_name,
}: BtnWithArrowProps) => {
  const handleButton = (gtag_event: any, form_name: any) => {
    GTAEvent(gtag_event, {
      form_name: form_name !== '' ? form_name : null,
    })
  }
  return (
    <>
      {link?.text && (
        <Link
          onClick={() => handleButton(gtag_event, form_name)}
          href={link?.href ?? ''}
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
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M3.83334 10H17.1667M17.1667 10L12.1667 5M17.1667 10L12.1667 15"
                      stroke="#F6F6F6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
              {arrowColor == 'black' && (
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
                      fill="#5A5A5A"
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

export default BtnWithArrowEnquiry
