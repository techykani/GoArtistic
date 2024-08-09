import { imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import Title from '../widgets/shared/title'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'

export const NewsInterested: React.FC<any> = ({ title, cta, slidesData, tag }) => {
  return (
    <>
      <div className="bg-[#F1F6FF] px-6 md:px-[71px] py-[36px] md:py-[80px]">
        <div className="container mx-auto flex flex-col gap-6">
          <Title headingType="h2" tagline={title} theme="light" />
          <div className="w-full flex flex-col md:flex-row gap-6 rounded-xl">
            {slidesData?.slice(0, 3)?.map(({ title, primaryImg, tag, calendar, _key }: any) => (
              <div
                className="w-full md:w-1/3 rounded-[12px] bg-[white] overflow-hidden md:shadow-megaMenu"
                key={_key}
              >
                <div className="relative ">
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={primaryImg}
                    width={800}
                    height={500}
                    alt={primaryImg?.alt ?? 'image'}
                    loading="eager"
                    className="object-cover w-full aspect-[16/9]"
                  />
                  <p className="px-2 h-[24px] bg-ember-100 rounded-l-[4px] absolute top-[16px] right-0 flex justify-center items-center text-grey-dark text-[14px] font-semibold leading-[20px]">
                    {tag}
                  </p>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-grey-8 text-[14px] leading-[20px] mb-2">
                    {' '}
                    {calendar?.date + ' ' + calendar?.month + ', ' + calendar?.year}
                  </p>
                  <h3 className="text-grey-dark text-[16px] font-semibold leading-[20px] truncate-overflow">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-[48px]">
          <BtnWithArrow
            link={cta}
            target="_self"
            rel=""
            btnType="primary"
            arrowVisibility={true}
            theme="light"
            customStyle="!px-10"
            size="medium"
            arrowColor="white"
            gtag_event="select_content"
            gtag_content_name={''}
            gtag_content_type={title}
            gtag_cta_button={cta}
          />
        </div>
      </div>
      {/* <div className="h-[4px] w-full bg-primary-green"></div> */}
    </>
  )
}
