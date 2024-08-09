import { useState } from 'react'
import { CarouselListing } from '../widgets/blocks/carouselListing/carouselListing'

const Specialists = ({ tagline, title, description, cta, specialtyList }: any) => {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-20 relative">
      <CarouselListing
        tagline={tagline}
        title={title}
        description={description}
        link={cta}
        card={specialtyList}
        carouselType="imageWithContent"
        className="bg-[#F1F6FF]"
        isGP={false}
        contentWidth="max-w-[1014px]"
        target="_self"
        btnType="tertiary"
        arrowVisibility="true"
        theme="light"
        customStyle=""
        size={'medium'}
        arrowColor="black"
        gtag_event="select_content"
        gtag_content_name={tagline}
        gtag_content_type={title}
      />
    </section>
  )
}

export default Specialists
