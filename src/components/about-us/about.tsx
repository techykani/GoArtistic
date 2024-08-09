import PrimaryImgFcDbl from '../widgets/blocks/storyTellingBlocks/primaryImgFcDbl'

export const About: React.FC<any> = ({
  title,
  cta,
  primaryImg,
  secondaryImg,
  description,
  tagline,
}) => {
  return (
    <section className="bg-off-white py-[48px] lg:py-20 px-6 lg:px-[71px]">
      <PrimaryImgFcDbl
        title={title}
        tagline={tagline}
        description={description}
        link={cta}
        target='_self'
        btnType="tertiary"
        arrowVisibility={true}
        theme='light'
        customStyle=''
        size='medium'
        arrowColor='black'
        image1={primaryImg}
        image2={secondaryImg}
        layout={'content-left'}
      />
    </section>
  )
}
