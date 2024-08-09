import NewsPrimaryImg from '../widgets/blocks/storyTellingBlocks/newsPrimaryImg'

const Milestone = ({
  title,
  cta,
  primaryImg,
  secondaryImg,
  secondaryMobileImg,
  description,
  tagline,
}: any) => {
  return (
    <section
      className=""
      style={{ background: 'linear-gradient(101deg, #0957CB 6.5%, #00D494 91.65%)' }}
    >
      <NewsPrimaryImg
        title={''}
        tagline={title}
        image1={primaryImg}
        image2={secondaryImg}
        image3={secondaryMobileImg}
        description={description}
        link={cta}
        target={'_self'}
        btnType={'tertiary'}
        arrowVisibility={true}
        theme={'dark'}
        customStyle={''}
        size={'medium'}
        arrowColor="white"
        layout={'content-right'}
      />
    </section>
  )
}

export default Milestone
