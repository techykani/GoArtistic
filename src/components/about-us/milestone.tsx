import Image from 'next/image'
import OneImageFlexHalf from '../widgets/blocks/oneImageFlexHalf'
import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'
import { SanityImg } from 'sanity-react-extra'

const Milestones = ({ image, description, tagline, title, cta, secondaryImg }: any) => {
  return (
    <section className="bg-[#F1F6FF] w-full px-6 md:px-[71px] py-[48px] md:py-[80px]">
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
        layout="content-left"
        contentWidth="max-w-[1016px]"
        secondaryImg={secondaryImg}
      />

    </section>
  )
}

export default Milestones
