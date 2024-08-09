import Link from 'next/link'
import { Button, LinkAngleRight } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '@/lib/hooks'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import Title from '@/components/widgets/shared/title'

const RelatedInsights = ({ article, type }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <section className=" bg-[#FEFEFE] py-[36px] md:py-[60px]">
      <div className={`${windowWidth >= 1020 ? 'px-[71px]' : ''} flex flex-col gap-6`}>
        <Title
          headingType="h2"
          theme="light"
          tagline={type === 'clinicBio' ? 'Related announcements' : 'Related article'}
          className={`${windowWidth >= 1020 ? 'container mx-auto' : 'px-6'}`}
        />
        <div className="w-full flex flex-col gap-8 md:gap-12">
          <div className="container mx-auto">
            {article && windowWidth >= 1020 && (
              <div className="flex gap-6">
                {article?.slice(0, 3)?.map(({ title, primaryImg, tag, calendar, _key }: any) => (
                  <div
                    className="w-full md:w-1/3 rounded-[12px] bg-[white] overflow-hidden md:shadow-megaMenu"
                    key={_key}
                  >
                    {primaryImg && (
                      <div className="relative">
                        <SanityImg
                          builder={imageUrlBuilder}
                          image={primaryImg}
                          width={800}
                          height={500}
                          alt={primaryImg?.alt ?? 'image'}
                          loading="eager"
                          className="object-cover w-full"
                        />

                        <p className="px-2 h-[24px] bg-ember-100 rounded-l-[4px] absolute top-[16px] right-0 flex justify-center items-center text-grey-dark text-[14px] font-semibold leading-[20px]">
                          {tag}
                        </p>
                      </div>
                    )}
                    <div className="p-4 md:p-6 ">
                      <p className="text-grey-8 text-[14px] leading-[20px] mb-2">{`${calendar.date} ${calendar.month}, ${calendar.year}`}</p>
                      <h5 className="text-grey-dark text-[16px] font-semibold leading-[20px] ">
                        {title.substring(0, 30) + '...'}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {article && windowWidth < 1020 && (
              <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                slidesOffsetAfter={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={`${windowWidth >= 1020 ? '!pl-[71px]' : '!pl-6'} pt-6 carousel-swiper `}
              >
                {article?.slice(0, 3)?.map(({ primaryImg, title, tag, calendar, _id }: any) => (
                  <SwiperSlide
                    className={`${
                      windowWidth >= 1020 ? '!w-[392px]  !mr-[24px]' : '!w-[288px] !mr-[24px]'
                    } h-full `}
                    key={_id}
                  >
                    <div className="flex justify-center">
                      <div
                        className="w-full rounded-[12px] bg-[white] overflow-hidden md:shadow-megaMenu"
                        key={_id}
                      >
                        {primaryImg && (
                          <div className="relative">
                            <SanityImg
                              builder={imageUrlBuilder}
                              image={primaryImg}
                              width={800}
                              height={500}
                              alt={primaryImg?.alt ?? 'image'}
                              loading="eager"
                              className="object-cover w-full"
                            />
                            <p className="px-2 h-[24px] bg-ember-100 rounded-l-[4px] absolute top-[16px] right-0 flex justify-center items-center text-grey-dark text-[14px] font-semibold leading-[20px]">
                              {tag}
                            </p>
                          </div>
                        )}
                        <div className="p-4 md:p-6 min-h-[100px]">
                          <p className="text-grey-8 text-[14px] leading-[20px] mb-2">{`${calendar.date} ${calendar.month}, ${calendar.year}`}</p>
                          <h3 className="text-grey-dark text-[16px] font-semibold leading-[20px] ">
                            {title.substring(0, 30) + '...'}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          {type !== 'clinicBio' && (
            <div className="w-full flex justify-center">
              <div>
                <Button
                  // disabled={isFetchingNextPage || !hasNextPage}
                  size="base"
                  variant="solid"
                  color="primary"
                  className="btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center"
                >
                  <LinkAngleRight
                    href={'/insights'}
                    color="white"
                    gtag_event="select_content"
                    gtag_content_name={''}
                    gtag_content_type={'insights'}
                    gtag_cta_button={'View More'}
                  >
                    View More{' '}
                  </LinkAngleRight>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RelatedInsights
