import { useEffect, useState } from 'react'
import {
  LinkedinShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from 'react-share'

const SocialShare = ({ setShowSharingModal }: any) => {
  const [urlForClipboard, setUrlForClipboard] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href
      const { href } = new URL(currentUrl)
      setUrlForClipboard(currentUrl)
    }
  }, [])

  const handleCopyTextToClipboard = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log('Text copied to clipboard:', url)
        // You can also provide feedback to the user here if needed
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error)
        // Handle error if necessary
      })
  }

  const handleInputField = (event: any) => {
    event.target.select()
  }

  return (
    <div className="w-full relative p-[25px] pt-[23px] bg-[white] shadow-level2 rounded-lg">
      <button
        onClick={() => setShowSharingModal(false)}
        className="absolute top-[13px] right-[18px] md:top-[23px] md:right-[25px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#5A5A5A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-[#3C3C3C] text-[16px] font-semibold leading-5">Share this article</p>
          <p className="text-[#6E6E6E] text-[14px] leading-5">
            If you like this article share it with your friends.
          </p>
        </div>
        <div className="flex justify-between">
          <LinkedinShareButton url={urlForClipboard}>
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                >
                  <circle cx="24.5" cy="24" r="24" fill="#E9F0F7" />
                  <path
                    d="M19.8052 32H16.2807V20.6502H19.8052V32ZM18.0411 19.102C16.9143 19.102 16 18.1685 16 17.0415C16 15.9145 16.9143 15 18.0411 15C19.1678 15 20.0821 15.9145 20.0821 17.0415C20.0821 18.1685 19.1678 19.102 18.0411 19.102ZM32.9962 32H29.4794V26.475C29.4794 25.1583 29.4528 23.4696 27.647 23.4696C25.8146 23.4696 25.5338 24.9002 25.5338 26.3801V32H22.0132V20.6502H25.3934V22.1984H25.4428C25.9132 21.3067 27.0627 20.3656 28.7775 20.3656C32.3437 20.3656 33 22.7145 33 25.7654V32H32.9962Z"
                    fill="#2867B2"
                  />
                </svg>
              </div>
              <p className="text-[#6E6E6E] text-center text-[12px] leading-[16px]">Linkedin</p>
            </div>
          </LinkedinShareButton>
          <FacebookShareButton url={urlForClipboard}>
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#1877F2" fill-opacity="0.1" />
                  <path
                    d="M27.4102 25.125L27.8769 21.8674H24.9589V19.7535C24.9589 18.8623 25.3665 17.9936 26.6734 17.9936H28V15.2201C28 15.2201 26.7961 15 25.6451 15C23.242 15 21.6712 16.5602 21.6712 19.3847V21.8674H19V25.125H21.6712V33H24.9589V25.125H27.4102Z"
                    fill="#1877F2"
                  />
                </svg>
              </div>
              <p className="text-[#6E6E6E] text-center text-[12px] leading-[16px]">Facebook</p>
            </div>
          </FacebookShareButton>
          <WhatsappShareButton url={urlForClipboard}>
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                >
                  <circle cx="24.5" cy="24" r="24" fill="#25D366" fill-opacity="0.1" />
                  <path
                    d="M30.804 17.6156C29.1205 15.9281 26.8786 15 24.496 15C19.5781 15 15.5763 19.0018 15.5763 23.9196C15.5763 25.4906 15.9862 27.0254 16.7656 28.3795L15.5 33L20.229 31.7585C21.5308 32.4696 22.9973 32.8433 24.492 32.8433H24.496C29.4098 32.8433 33.5 28.8415 33.5 23.9237C33.5 21.5411 32.4875 19.3031 30.804 17.6156ZM24.496 31.3406C23.1621 31.3406 21.8562 30.983 20.7192 30.308L20.45 30.1473L17.6455 30.8826L18.3929 28.1464L18.2161 27.8652C17.4728 26.6839 17.083 25.3219 17.083 23.9196C17.083 19.8335 20.4098 16.5067 24.5 16.5067C26.4808 16.5067 28.3411 17.2781 29.7393 18.6804C31.1375 20.0826 31.9973 21.9429 31.9933 23.9237C31.9933 28.0138 28.5821 31.3406 24.496 31.3406ZM28.5621 25.7879C28.3411 25.6754 27.2442 25.1371 27.0393 25.0647C26.8344 24.9884 26.6857 24.9522 26.5371 25.1772C26.3884 25.4022 25.9625 25.9004 25.8299 26.0531C25.7013 26.2018 25.5688 26.2219 25.3478 26.1094C24.0379 25.4545 23.1781 24.9402 22.3143 23.4576C22.0853 23.0638 22.5433 23.092 22.9692 22.2402C23.0415 22.0915 23.0054 21.9629 22.9491 21.8504C22.8929 21.7379 22.4469 20.6411 22.2621 20.1951C22.0813 19.7612 21.8964 19.8214 21.7598 19.8134C21.6312 19.8054 21.4826 19.8054 21.3339 19.8054C21.1853 19.8054 20.9442 19.8616 20.7393 20.0826C20.5344 20.3076 19.9598 20.846 19.9598 21.9429C19.9598 23.0397 20.7594 24.1004 20.8679 24.2491C20.9804 24.3978 22.4388 26.6478 24.6768 27.6161C26.0911 28.2268 26.6455 28.279 27.3527 28.1746C27.7826 28.1103 28.6705 27.6362 28.8554 27.1138C29.0402 26.5915 29.0402 26.1455 28.9839 26.0531C28.9317 25.9527 28.783 25.8964 28.5621 25.7879Z"
                    fill="#25D366"
                  />
                </svg>
              </div>
              <p className="text-[#6E6E6E] text-center text-[12px] leading-[16px]">WhatsApp</p>
            </div>
          </WhatsappShareButton>
          <TwitterShareButton url={urlForClipboard}>
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                >
                  <circle cx="24.5" cy="24" r="24" fill="#E5E5E5" />
                  <path
                    d="M25.7368 22.925L30.5763 17H29.4295L25.2273 22.1446L21.8711 17H18L23.0753 24.7795L18 30.9928H19.1469L23.5845 25.5599L27.1289 30.9928H31L25.7365 22.925H25.7368ZM24.166 24.8481L23.6517 24.0734L19.5601 17.9093H21.3217L24.6236 22.8839L25.1379 23.6586L29.43 30.1249H27.6685L24.166 24.8484V24.8481Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p className="text-[#6E6E6E] text-center text-[12px] leading-[16px]">X</p>
            </div>
          </TwitterShareButton>
        </div>
        <div className="p-[14px] border-[1px] border-[#E6E6E6] rounded-[6px] flex gap-2 justify-between">
          <input
            className="text-[#6E6E6E] text-[14px] leading-[20px] overflow-scroll w-full border-none outline-none"
            value={urlForClipboard}
            onClick={handleInputField}
          />
          <div
            onClick={() => handleCopyTextToClipboard(urlForClipboard)}
            className="cursor-pointer active:scale-[0.8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.4001 6.6001H8.2001C7.31644 6.6001 6.6001 7.31644 6.6001 8.2001V15.4001C6.6001 16.2838 7.31644 17.0001 8.2001 17.0001H15.4001C16.2838 17.0001 17.0001 16.2838 17.0001 15.4001V8.2001C17.0001 7.31644 16.2838 6.6001 15.4001 6.6001Z"
                stroke="#6E6E6E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.4 11.4H2.6C2.17565 11.4 1.76869 11.2314 1.46863 10.9314C1.16857 10.6313 1 10.2243 1 9.8V2.6C1 2.17565 1.16857 1.76869 1.46863 1.46863C1.76869 1.16857 2.17565 1 2.6 1H9.8C10.2243 1 10.6313 1.16857 10.9314 1.46863C11.2314 1.76869 11.4 2.17565 11.4 2.6V3.4"
                stroke="#6E6E6E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialShare
