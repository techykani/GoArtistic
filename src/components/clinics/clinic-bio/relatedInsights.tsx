import Link from 'next/link'
import { Button, LinkAngleRight } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'

const RelatedInsights = ({ media }: any) => {
  return (
    <section className="px-6 lg:px-[71px] bg-[#F4F3F0] py-[64px] md:py-[96px]">
      <div className="container mx-auto flex flex-col gap-8 md:gap-12">
        <h2 className="w-full text-[#004E89] text-[36px] md:text-[48px] font-semibold leading-[44px] md:leading-[56px] tracking-[-0.28px] md:tracking-[-0.48px]">
          Related insights
        </h2>
        <div className="w-full flex flex-col gap-8 md:gap-12">
          {media && (
            <Swiper
              spaceBetween={10}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
              slidesOffsetAfter={10}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="pt-6 carousel-swiper"
            >
              {media?.map(({ address, mobileNo, schedule, title, _id }: any) => (
                <SwiperSlide className="!w-[288px]  !ml-[24px]" key={_id}>
                  <div className="w-[288px] md:w-[392px]">
                    <div className="min-w-[288px] rounded-[12px] bg-[white] overflow-hidden md:shadow-megaMenu">
                      <div className="relative h-[176px] md:h-[221px]">
                        {/* <Image
            src="/doctor.png"
            width={800}
            height={500}
            alt=""
            className="object-cover w-full h-full"
          /> */}
                        <p className="w-[63px] h-[24px] bg-ember-100 rounded-l-[4px] absolute top-[16px] right-0 flex justify-center items-center text-grey-dark text-[14px] font-semibold leading-[20px]">
                          Insight
                        </p>
                      </div>
                      <div className="p-4 md:p-6">
                        <p className="text-grey-8 text-[14px] leading-[20px] mb-2">10 Oct, 2023</p>
                        <h3 className="text-grey-dark text-[16px] font-semibold leading-[20px] ">
                          How to Improve A Women&apos;s Chances of Conceiving
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {/* <LocationSlider /> */}
          <div className="w-full flex justify-center">
            <div className="w-full flex justify-center">
              <Button
                // disabled={isFetchingNextPage || !hasNextPage}
                size="base"
                variant="solid"
                color="primary"
                className="w-full inline-block bg-grey-darkest text-[white] px-6 py-3 rounded-lg align-baseline font-semibold max-w-[204px]"
              >
                <LinkAngleRight
                  href={''}
                  color="white"
                  gtag_event="select_content"
                  gtag_content_name={'How to Improve A Women&apos;s Chances of Conceiving'}
                  gtag_content_type={'Insight'}
                  gtag_cta_button={' View more'}
                >
                  View more{' '}
                </LinkAngleRight>
              </Button>
              {/* <Link
            href={"#"}
            className="w-full inline-block bg-grey-darkest text-white px-6 py-3 rounded-lg align-baseline font-semibold max-w-[204px]"
          >
            <p className="flex items-center justify-center text-[white] text-[16px] leading-[24px]">
              {button.title}{" "}
              <FaArrowRight className="ml-2 inline text-white text-2xl font-light" />
            </p>
          </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedInsights
