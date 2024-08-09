import Image from 'next/image'
import style from '@/styles/Home.module.css'
import ReactPortableText from '../widgets/shared/reactPortableText'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import { urlForImage } from '@/studio/lib/image'

const CorporateHealthCare = ({ title, cta, image, description, tagline }: any) => {
  return (
    <section className="bg-[#FFFFFF] px-6 md:px-[71px] py-12 md:py-20">
      <div className={`max-w-[1014px] mx-auto flex flex-col md:items-center md:flex-row gap-6 `}>
        <div className="md:w-1/2 xl:min-w-[600px] rounded-[16px] overflow-hidden">
          <Image
            src={urlForImage(image).url()}
            width={600}
            height={540}
            alt={image?.alt ?? ''}
            className="xl:min-w-[600px] object-cover w-full aspect-[6/5]"
          />
        </div>

        <div className={`w-full md:w-1/2 xl:max-w-[382px] flex flex-col gap-4 lg:pl-8`}>
          <div className="w-full flex flex-col gap-2">
            <div className="flex">
              <p className="text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase eyebrow_gradient">
                {title}
              </p>
            </div>
            <h2
              className={`text-[#0957CB] text-[26px]  md:text-[32px] font-bold leading-[32px] md:leading-[38px] md:tracking-[0.32px] ${style.montserrat}`}
            >
              {tagline}
            </h2>
            <div className="mt-[-24px]">
              <ReactPortableText content={description} />
            </div>
          </div>

          <div className="w-full flex">
            <BtnWithArrow
              link={cta}
              target="_self"
              rel="noopener noreferrer"
              btnType="tertiary"
              arrowVisibility={true}
              theme="light"
              customStyle=""
              size="medium"
              arrowColor="black"
              gtag_event="select_content"
              gtag_content_name={tagline}
              gtag_content_type={title}
              gtag_cta_button={cta.text}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateHealthCare
