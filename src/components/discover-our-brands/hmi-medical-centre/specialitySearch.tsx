import { PortableText, imageUrlBuilder } from '@/sanity'
import { useState } from 'react'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import Image from 'next/image'

import { urlForImage } from '@/studio/lib/image'
import Title from '@/components/widgets/shared/title'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'

export default function SpeacialtySearch({
  description,
  tagline,
  searchPlaceHolder,
  slidesData,
  cta,
}: any) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedDropdown, setSelectedDropdown] = useState('Sorted by A-Z')
  const [sortedCards, setSortedCards] = useState(slidesData)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="bg-[#F1F6FF] px-6 md:px-[71px] py-[48px] md:py-[80px]">
      <div className="container mx-auto flex flex-col gap-[32px]">
        {/* title */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:justify-between">
          <div className="w-full flex flex-col gap-4  md:max-w-[496px]">
            <Title tagline={tagline} headingType="h2" theme="light" />
            <div className="text-grey-8 text-base leading-[24px]">
              <PortableText blocks={description} />
            </div>
          </div>
        </div>
        {/* cards */}

        <div className="w-full flex flex-col gap-[32px]">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {slidesData?.slice(0, 12).map(({ primaryImg, title, tagline, slug }: any) => (
              <Link
                key={title}
                href={`/services/${slug?.current}`}
                className="p-4 md:p-6 flex gap-4 bg-off-white rounded-xl shadow-megaMenu group"
              >
                <div className="min-w-[64px] max-w-[64px] md:max-w-[72px] md:min-w-[72px]">
                  {primaryImg ? (
                    <div className="p-1 bg-aqua-light rounded-full">
                      <SanityImg
                        className="md:w-[90px] md:h-[64px] w-[80px] h-[56px]"
                        builder={imageUrlBuilder}
                        image={primaryImg}
                        alt={primaryImg?.alt ?? 'image'}
                      />
                      {/* <Image
                        className="md:w-[90px] md:h-[64px] w-[80px] h-[56px]"
                        src={urlForImage(primaryImg).url()}
                        alt={primaryImg?.alt ?? 'image'}
                        width={90}
                        height={64}
                      /> */}
                    </div>
                  ) : (
                    <div className="p-1 bg-aqua-light rounded-full">
                      <Image
                        src="/user-profile.png"
                        width={120}
                        height={120}
                        alt="image"
                        className="md:w-[90px] md:h-[64px] w-[80px] h-[56px] object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="w-full flex flex-col md:gap-2">
                  <h3 className="text-grey-dark text-sm md:text-base font-semibold leading-[20px] group-hover:text-primary-blue">
                    {title}
                  </h3>
                  <p className="text-grey-8 text-[14px] leading-[20px]">{tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <BtnWithArrow
            link={cta}
            target="_self"
            rel=""
            btnType="primary"
            arrowVisibility={true}
            theme="light"
            customStyle=""
            size="medium"
            arrowColor="white"
            gtag_event="select_content"
            gtag_content_name={tagline}
            gtag_content_type=""
            gtag_cta_button={cta?.text}
          />
        </div>
      </div>
    </section>
  )
}
