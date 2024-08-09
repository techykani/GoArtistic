import { useWindowSize } from '@/lib/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThreeColCard } from '../../../cards/primaryListingCards/threeColCard'

const CarouselLists = ({ points, sliderPosition }: any) => {
    const windowWidth = useWindowSize()?.width ?? 0
    return (
        <>
            <Swiper
                spaceBetween={24}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
                onSlideChange={(e) => console.log('slide change', e)}
                onSwiper={(swiper) => console.log(swiper)}
                className="grid grid-flow-col carousel-swiper"
                style={{ paddingLeft: sliderPosition }}
            >
                {points?.map(({ icon, shortDes, link }: any) => (
                    <SwiperSlide key={link?.text} className="!w-[288px] ">
                        <ThreeColCard image={icon} shortDes={shortDes} link={link} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CarouselLists
