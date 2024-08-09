import { Button, LinkAngleRight } from '../ui'
import EyeBrew from '../widgets/shared/eyeBrew'
import Title from '../widgets/shared/title'

export const LandingHero: React.FC<any> = ({ title, tagline, image, description, button }) => {
  return (
    <div className="bg-[#004E89] px-6 md:px-[71px] py-[64px] md:py-[60px]">
      <div className="container mx-auto flex flex-col md:flex-row-reverse md:items-center gap-6">
        {image && (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full aspect-[6/5] md:w-1/2 rounded-2xl overflow-hidden bg-cover bg-center"
          ></div>
        )}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:pr-[32px]">
          <div className="flex flex-col gap-2">
            <EyeBrew theme="dark" title={title} className="!tracking-[2.4px] " />
            <Title headingType="h1" theme="dark" tagline={tagline} className="" />
            <p className="text-[#FBFBFB] text-base leading-[24px]">{description}</p>
          </div>
          {/* <div className="w-full flex">
            <div>
              <button className="w-full inline-block text-base leading-[24px] text-off-white px-6 py-3 rounded-full align-baseline font-semibold border-[2px] border-off-white">
                <LinkAngleRight
                  href={button?.href ?? ''}
                  color="white"
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={title}
                  gtag_cta_button="Make appointment"
                >
                  Make appointment{' '}
                </LinkAngleRight>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LandingHero
