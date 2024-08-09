import { AboutCarouselListing } from '../widgets/blocks/carouselListing/aboutCarouselListing'
import { CarouselListing } from '../widgets/blocks/carouselListing/carouselListing'

interface SpecialistsProps {
  tagline: string
  title: string
  description: string
  button: CTAButton
  classNameValues?: string
  card: Point[]
}

export const OurBusiness: React.FC<any> = ({ tagline, title, description, cta, entities }) => {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-20 relative">
      <AboutCarouselListing
        tagline={tagline}
        title={title}
        description={description}
        link={cta}
        card={entities}
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
      />
    </section>
  )
}
