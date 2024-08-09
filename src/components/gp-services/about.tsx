import OneImageFlexHalf from '../widgets/blocks/oneImageFlexHalf'
import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'

const AboutHealthierSG = ({ image, description, tagline, title, cta, secondaryImg }: any) => {
  return (
    <section
      style={{ background: '#FEFEFE' }}
      className="w-full px-6 md:px-[71px] py-[48px] md:py-[80px]"
    >
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
        contentWidth="max-w-[1016px]"
        secondaryImg={secondaryImg}
      />
    </section>
  )
}

export default AboutHealthierSG
