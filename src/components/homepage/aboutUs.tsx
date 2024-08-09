import PrimaryImgFcDbl from '../widgets/blocks/storyTellingBlocks/primaryImgFcDbl'

const AboutUs = ({ title, cta, primaryImg, secondaryImg, description, tagline, logo }: any) => {
  return (
    <section className="bg-[#FBFBFB] px-6 md:px-[71px] py-12 md:py-20">
      <PrimaryImgFcDbl
        title={title}
        tagline={tagline}
        logo={logo}
        image1={primaryImg}
        image2={secondaryImg}
        description={description}
        link={cta}
        target={'_self'}
        btnType={'tertiary'}
        arrowVisibility={true}
        theme={'light'}
        customStyle={''}
        size={'medium'}
        arrowColor="black"
        layout={'content-right'}
      />
    </section>
  )
}

export default AboutUs
