import { CarouselListing } from '../widgets/blocks/carouselListing/carouselListing'

const Specialists = ({ tagline,
  title,
  description,
  cta,
  specialtyList, }: any) => {

  return (
    <section className="bg-[#F1F6FF] py-12 md:py-20 relative">
      <CarouselListing
        tagline={tagline}
        title={title}
        description={description}
        link={cta}
        card={specialtyList}
        carouselType="imageWithContent"
        className="blue-gradient_bg"
        isGP={false}
        contentWidth="max-w-[1014px]"
        target="_self"
        btnType="tertiary"
        arrowVisibility={true}
        theme="dark"
        customStyle=""
        size={"medium"}
        arrowColor="white"
      />
    </section>
  )
}

export default Specialists
