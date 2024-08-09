import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

const OurTestimonials = ({ caption, cards }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <section className="">
      <div className="py-8 md:pt-[64px] md:text-center text-grey-dark text-[20px] md:text-[28px] font-semibold leading-[24px] md:leading-[36px] md:tracking-[-0.28px] px-6 md:px-[71px]">
        {caption}
      </div>

      <div className="container mx-auto">
        {cards && windowWidth >= 768 && (
          <div className="px-6 flex gap-6">
            {cards.map(({ title, _key, primaryImg, quoteName, quoteCaption, quoteDomain }: any) => (
              <div
                className="w-full md:w-1/3 rounded-[12px] bg-off-white border-[1px] border-[#E6E6E6] flex flex-col justify-between gap-8 p-6"
                key={_key}
              >
                <div className="flex flex-col gap-2">
                  <div className="w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M4.81316 25.1546L7.53937 20.4441C5.47121 20.4441 3.70388 19.7093 2.21857 18.2208C0.733255 16.7323 0 14.9612 0 12.8886C0 10.816 0.752056 9.06368 2.23737 7.59402C3.72268 6.12436 5.49001 5.37069 7.55817 5.37069C9.62632 5.37069 11.3937 6.10552 12.879 7.59402C14.3643 9.08252 15.0975 10.8537 15.0975 12.9262C15.0975 13.6422 15.0035 14.3205 14.8343 14.9235C14.6651 15.5264 14.4019 16.1293 14.0635 16.6946L8.08461 27.0576C7.9342 27.3402 7.70858 27.5663 7.42656 27.7359C7.14454 27.9055 6.82491 27.9997 6.48649 27.9997C5.77203 27.9997 5.22679 27.6794 4.86956 27.0576C4.51234 26.4358 4.49354 25.7952 4.85076 25.1734L4.81316 25.1546ZM21.7344 25.1546L24.4606 20.4441C22.3925 20.4441 20.6251 19.7093 19.1398 18.2208C17.6545 16.7323 16.9213 14.9612 16.9213 12.8886C16.9213 10.816 17.6545 9.04484 19.1398 7.55634C20.6251 6.06784 22.3925 5.33301 24.4606 5.33301C26.5288 5.33301 28.2961 6.06784 29.7814 7.55634C31.2667 9.04484 32 10.816 32 12.8886C32 13.6046 31.906 14.2829 31.7368 14.8858C31.5676 15.4887 31.3043 16.0917 30.9659 16.6569L24.9871 27.0199C24.8367 27.3025 24.611 27.5286 24.329 27.6982C24.047 27.8678 23.7274 27.962 23.389 27.962C22.6745 27.962 22.1293 27.6417 21.772 27.0199C21.4148 26.3981 21.396 25.7575 21.7532 25.1357L21.7344 25.1546Z"
                        fill="#00A854"
                      />
                    </svg>
                  </div>
                  <p className="text-grey-dark text-[16px] leading-[24px]">{title}</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px]">
                    <SanityImg
                      builder={imageUrlBuilder}
                      image={primaryImg}
                      width={800}
                      height={500}
                      alt={primaryImg?.alt ?? 'image'}
                      loading="eager"
                      className="object-cover w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                      {quoteName}
                    </p>
                    <p className="text-grey-8 text-[14px] leading-[20px]">{quoteCaption}</p>
                    <p className="text-primary-blue text-[14px] font-semibold leading-[20px]">
                      {quoteDomain}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cards && windowWidth < 768 && (
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={`${windowWidth >= 768 ? '!pl-[71px]' : '!pl-6'} pt-6 carousel-swiper `}
          >
            {cards?.map(
              ({ title, _key, primaryImg, quoteName, quoteCaption, quoteDomain }: any) => (
                <SwiperSlide
                  className={`${
                    windowWidth >= 768 ? '!w-[392px] !mr-[24px]' : '!w-[312px] !mr-[24px]'
                  } h-full `}
                  key={_key}
                >
                  <div className="flex justify-center">
                    <div
                      className="w-full min-h-[284px] rounded-[12px] bg-off-white border-[1px] border-[#E6E6E6] flex flex-col justify-between gap-6 p-6"
                      key={_key}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="w-6 h-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3.60987 18.8662L5.65452 15.3333C4.10341 15.3333 2.77791 14.7822 1.66392 13.6658C0.549941 12.5495 0 11.2211 0 9.66667C0 8.11222 0.564042 6.798 1.67803 5.69576C2.79201 4.59352 4.11751 4.02826 5.66863 4.02826C7.21974 4.02826 8.54524 4.57938 9.65922 5.69576C10.7732 6.81214 11.3231 8.14048 11.3231 9.69493C11.3231 10.2319 11.2526 10.7406 11.1257 11.1929C10.9988 11.6451 10.8014 12.0973 10.5476 12.5212L6.06345 20.2934C5.95065 20.5054 5.78143 20.675 5.56992 20.8022C5.3584 20.9293 5.11868 21 4.86486 21C4.32902 21 3.92009 20.7598 3.65217 20.2934C3.38425 19.8271 3.37015 19.3466 3.63807 18.8803L3.60987 18.8662ZM16.3008 18.8662L18.3455 15.3333C16.7944 15.3333 15.4689 14.7822 14.3549 13.6658C13.2409 12.5495 12.691 11.2211 12.691 9.66667C12.691 8.11222 13.2409 6.78387 14.3549 5.6675C15.4689 4.55112 16.7944 4 18.3455 4C19.8966 4 21.2221 4.55112 22.3361 5.6675C23.4501 6.78387 24 8.11222 24 9.66667C24 10.2037 23.9295 10.7124 23.8026 11.1646C23.6757 11.6168 23.4783 12.069 23.2244 12.4929L18.7403 20.2652C18.6275 20.4771 18.4583 20.6467 18.2468 20.7739C18.0353 20.9011 17.7955 20.9717 17.5417 20.9717C17.0059 20.9717 16.5969 20.7315 16.329 20.2652C16.0611 19.7988 16.047 19.3184 16.3149 18.852L16.3008 18.8662Z"
                              fill="#00A854"
                            />
                          </svg>
                        </div>
                        <p className="text-grey-dark text-[14px] leading-[20px]">{title}</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-[48px] h-[48px]">
                          <SanityImg
                            builder={imageUrlBuilder}
                            image={primaryImg}
                            width={800}
                            height={500}
                            alt={primaryImg?.alt ?? 'image'}
                            loading="eager"
                            className="object-cover w-full rounded-full"
                          />
                        </div>
                        <div>
                          <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                            {quoteName}
                          </p>
                          <p className="text-grey-8 text-[14px] leading-[20px]">{quoteCaption}</p>
                          <p className="text-primary-blue text-[14px] font-semibold leading-[20px]">
                            {quoteDomain}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        )}
      </div>
    </section>
  )
}

export default OurTestimonials
