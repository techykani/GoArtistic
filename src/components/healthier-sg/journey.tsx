import { useWindowSize } from '@/lib/hooks';
import { useState, useRef, useEffect } from 'react';
import Title from '../widgets/shared/title';
import ReactPortableText from '../widgets/shared/reactPortableText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { LeftArrow } from '@/icons/leftArrow';
import { RightArrow } from '@/icons/rightArrow';
import { CarouselCard } from '../widgets/blocks/carouselListing/carouselCard';
import EyeBrow from '../widgets/shared/eyeBrew';

interface Step {
  title: string;
  subTitle: string;
  description: any;
}

interface HealthierSGJourneyProps {
  tagline: string;
  steps: Step[];
}

const HealthierSGJourney: React.FC<HealthierSGJourneyProps> = ({ tagline, steps }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const windowWidth = useWindowSize()?.width ?? 0;

  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect();
      setSliderPosition(rect.left);
    }
  }, [windowWidth]);

  return (
    <div className="bg-[#F1F6FF] py-12 md:py-[60px] flex flex-col gap-6">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto">
          <div className="flex flex-col gap-6 md:gap-[32px]">
            <div className="w-full max-w-[600px]">
              <Title tagline={tagline} headingType="h2" theme="light" />
            </div>
            {windowWidth >= 1366 && steps && (
              <div className="grid grid-cols-4 gap-[24px]">
                {steps.map((step) => (
                  <div key={step?.title}>
                    <div
                      style={{ boxShadow: '0px 1px 14px 0px rgba(0, 0, 0, 0.09)' }}
                      className="p-6 rounded-xl bg-[#FBFBFB]"
                    >
                      <div className="flex flex-col gap-2">
                        <EyeBrow title={step?.title} />
                        <p className="text-[#3C3C3C] text-[16px] font-semibold leading-[20px]">
                          {step?.subTitle}
                        </p>
                        <div className="mt-[-24px]">
                          <ReactPortableText content={step?.description} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {windowWidth < 1366 && steps && (
        <div className="relative z-20">
          <div className="relative">
            <Swiper
              spaceBetween={24}
              slidesPerView="auto"
              pagination={{ clickable: true }}
              navigation={{
                prevEl,
                nextEl,
              }}
              modules={[Navigation]}
              slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="carousel-swiper"
              style={{ paddingLeft: sliderPosition }}
            >
              {steps.map((step) => (
                <SwiperSlide key={step?.subTitle} className="!w-[288px] h-full">
                  <div
                    style={{ boxShadow: '0px 1px 14px 0px rgba(0, 0, 0, 0.09)' }}
                    className="p-6 rounded-xl bg-[#FBFBFB]"
                  >
                    <div className="flex flex-col gap-2">
                      <EyeBrow title={step?.title} theme="light" />
                      <p className="text-[#3C3C3C] text-[16px] font-semibold leading-[20px]">
                        {step?.subTitle}
                      </p>
                      <div className="mt-[-24px]">
                        <ReactPortableText content={step?.description} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full px-6 md:px-[71px] absolute top-[50%] transform -translate-y-1/2 z-50">
            <div className="container mx-auto flex justify-between">
              <button
                aria-label="arrow-left-previous-slide"
                className="w-[50px] h-[50px] rounded-full bg-off-white flex justify-center items-center"
                ref={(node) => setPrevEl(node)}
              >
                <LeftArrow />
              </button>
              <button
                aria-label="arrow-right-next-slide"
                className="w-[50px] h-[50px] rounded-full bg-off-white flex justify-center items-center"
                ref={(node) => setNextEl(node)}
              >
                <RightArrow />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthierSGJourney;
