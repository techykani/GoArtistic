import PrimaryTxtFc from '../widgets/blocks/storyTellingBlocks/primaryTxtFc'
import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'

const UrgentCare: React.FC<any> = ({ title, cta, image, description, tagline }) => {
  return (
    <div className="px-6 md:px-[71px] py-12 md:py-20 bg-[#FEFEFE]">
      {/* <PrimaryTxtFc
        title={title}
        tagline={tagline}
        image={image}
        description={description}
        link={cta}
        layout="content-left"
        target={'_self'}
        btnType={'tertiary'}
        arrowVisibility={true}
        theme={'light'}
        customStyle={''}
        size={'medium'}
        arrowColor='black'
        contentWidth="container"
        loading={'eager'}
        imgQuality={100}
      /> */}
      <SecondaryFlex
        title={title}
        tagline={tagline}
        image={image}
        description={description}
        link={cta}
        layout="content-left"
        target={'_self'}
        btnType={'tertiary'}
        arrowVisibility={true}
        theme={'light'}
        customStyle={''}
        size={'medium'}
        arrowColor={'black'}
        contentWidth="max-w-[1016px]"
        loading={'eager'}
        imgQuality={100}
      />
    </div>
  )
}


export default UrgentCare