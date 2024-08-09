import PrimaryTxtFc from '@/components/widgets/blocks/storyTellingBlocks/primaryTxtFc'

const OurDoctorsSec = ({ image, title, tagline, description, cta }: any) => {
  return (
    <section className="bg-[#FEFEFE] w-full px-6 md:px-[71px] py-[48px] md:py-20">
      <PrimaryTxtFc
        title={title}
        tagline={tagline}
        image={image}
        description={description}
        link={cta}
        layout="content-right"
        target={'_self'}
        btnType={'tertiary'}
        arrowVisibility={true}
        theme={'light'}
        customStyle={''}
        size={'medium'}
        arrowColor='black'
        contentWidth="container"
        loading={'lazy'}
        imgQuality={100}
      />
    </section>
  )
}

export default OurDoctorsSec
