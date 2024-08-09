import OneImageFlexHalf from '../widgets/blocks/oneImageFlexHalf'
import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'

const AboutHealthierSG = ({ image, description, tagline, title, cta, secondaryImg }: any) => {
  return (
    <section style={{ background: "linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)" }} className="w-full px-6 md:px-[71px] py-[48px] md:py-[80px]">
      <SecondaryFlex
        title={title}
        tagline={tagline}
        description={description}
        link={cta}
        target="_self"
        btnType="tertiary"
        arrowVisibility={true}
        theme="dark"
        customStyle=""
        size="medium"
        arrowColor="white"
        image={image}
        layout="content-right"
        contentWidth="max-w-[1016px]"
        secondaryImg={secondaryImg}
      />
    </section>
  )
}

export default AboutHealthierSG
