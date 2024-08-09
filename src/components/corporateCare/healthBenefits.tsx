import OneImageFlexHalf from '../widgets/blocks/oneImageFlexHalf'
import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'

const HealthBenefitsSec = ({ image, description, tagline, title, cta, secondaryImg }: any) => {
  return (
    <section className="bg-[#FBFBFB] w-full px-6 md:px-[71px] py-[48px] md:py-[80px]">
      {/* <OneImageFlexHalf
        image={image}
        description={description}
        tagline={tagline}
        title={title}
        button={button}
        layout="content-left"
      /> */}
      <SecondaryFlex
        title={title}
        tagline={tagline}
        description={description}
        link={cta}
        target="_self"
        btnType="tertiary"
        arrowVisibility={true}
        theme="light"
        customStyle=""
        size="medium"
        arrowColor="black"
        image={image}
        layout="content-right"
        contentWidth="container"
        secondaryImg={secondaryImg}
      />
    </section>
  )
}

export default HealthBenefitsSec
