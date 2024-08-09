import { SingleImageAndCtaBlock } from '../common/blocks/single-image-and-cta-block'
import OneImageLessHalf from '../widgets/blocks/oneImageLessHalf'

export const HealthAssessment: React.FC<any> = ({ title, button, image, description, tagline }) => {
  return (
    <div className="px-6 md:px-[71px] py-16 md:py-[80px] bg-[white]">
      <OneImageLessHalf
        title={title}
        tagline={tagline}
        image={image}
        description={description}
        button={button}
        layout="content-left"
      />
    </div>
  )
}
