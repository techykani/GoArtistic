import OneImageFlexHalf from '../widgets/blocks/oneImageFlexHalf'
import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'

const HealthierSGEnrol = ({ image, description, tagline, title, cta, secondaryImg }: any) => {
  return (
    <section className=" bg-[#FEFEFE] w-full px-6 md:px-[71px] py-[48px] md:py-[80px]">
      <SecondaryFlex
        title={title}
        tagline={tagline}
        description={description}
        link={cta}
        target="_self"
        btnType="primary"
        arrowVisibility={true}
        theme="light"
        customStyle=""
        size="medium"
        arrowColor="white"
        image={image}
        layout="content-left"
        contentWidth="container"
        secondaryImg={secondaryImg}
      />
    </section>
  )
}

export default HealthierSGEnrol
