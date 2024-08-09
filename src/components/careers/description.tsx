import { SecondaryFlex } from '../widgets/blocks/storyTellingBlocks/secondaryFlex'

export const Description: React.FC<any> = ({
  title,
  description,
  image,
  tagline,
  cta,
}) => {
  return (
    <div className="px-6 md:px-[71px] py-12 md:py-[80px] bg-[#FEFEFE]">
      <SecondaryFlex title={title}
        tagline={tagline}
        description={description}
        link={cta}
        target='_self'
        btnType='tertiary'
        arrowVisibility={true}
        theme='light'
        customStyle=''
        size="medium"
        arrowColor='black'
        image={image}
        layout='content-right'
        contentWidth='container' />
    </div>
  )
}
