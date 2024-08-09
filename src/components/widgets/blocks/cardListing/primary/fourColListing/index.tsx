import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import PrimarySectionHorizontal from '../../../sections/primarySectionHorizontal'
import CarouselLists from '../threeColListing/carouselLists'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { PortableText } from '@/sanity'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import LocationCardListing from './locationCardListing'

const FourColCardListing = ({
    title,
    link,
    points,
    tagline,
    description,
    target,
    btnType,
    arrowVisibility,
    theme,
    customStyle,
    size,
    arrowColor,
    children,
    headingRef,
}: any) => {
    return (
        <>
            <div className="px-6 md:px-[71px]">
                <div ref={headingRef} className="container mx-auto">
                    <PrimarySectionHorizontal
                        title={title}
                        tagline={tagline}
                        description={description}
                        link={link}
                        target={target}
                        btnType={btnType}
                        arrowVisibility={arrowVisibility}
                        theme={theme}
                        customStyle={customStyle}
                        size={size}
                        arrowColor={arrowColor}
                    />
                </div>
            </div>
            {points?.length > 0 && <div>{children}</div>}
        </>
    )
}

export default FourColCardListing
