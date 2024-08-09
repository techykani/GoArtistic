import { CarouselListing } from '../widgets/blocks/carouselListing/carouselListing'

const OurSpecialistSection = ({ tagline, title, description, cta, specialtyList }: any) => {
  return (
    <div className={`py-12 md:py-20 relative bg-[white]`}>
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
        size={"medium"}
        arrowColor="black"
      />
    </div>
  )
}

export default OurSpecialistSection
