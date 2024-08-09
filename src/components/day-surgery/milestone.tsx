import PrimaryImgFcDbl from '../widgets/blocks/storyTellingBlocks/primaryImgFcDbl'

const Milestone = ({
  title,
  cta,
  primaryImg,
  secondaryImg,
  description,
  tagline,
}: any) => {
  return (
    <section className="blue-gradient_bg px-6 md:px-[71px] py-12 md:py-20">
      <PrimaryImgFcDbl
        title={title}
        tagline={tagline}
        image1={primaryImg}
        image2={secondaryImg}
        description={description}
        link={cta}
        target={"_self"}
        btnType={'tertiary'}
        arrowVisibility={true}
        theme={'dark'}
        customStyle={''}
        size={'medium'}
        arrowColor='white'
        layout={'content-right'}
      />
    </section>
  )
}

export default Milestone
