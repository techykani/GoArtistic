import { PortableText, imageUrlBuilder } from '@/sanity'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import Image from 'next/image'
import Title from '../widgets/shared/title'
import { urlForImage } from '@/studio/lib/image'

export default function SpeacialtySearch({
  description,
  tagline,
  searchPlaceHolder,
  slidesData,
}: any) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedDropdown, setSelectedDropdown] = useState('A-Z')
  const [sortedCards, setSortedCards] = useState(slidesData)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSort = (value: string) => {
    const sorted = [...slidesData].sort((a, b) => {
      const titleA = a.title.toUpperCase()
      const titleB = b.title.toUpperCase()

      if (value === 'A-Z') {
        return titleA.localeCompare(titleB)
      } else {
        return titleB.localeCompare(titleA)
      }
    })

    setSortedCards(sorted)
    setSelectedDropdown(value)
  };

  useEffect(() => {
    handleSort("A-Z")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value.toLowerCase()

    const filtered = slidesData.filter((card: any) => card.title.toLowerCase().includes(searchTerm))

    setSortedCards(filtered)
    setSearchTerm(searchTerm)
  }

  const handleInputClick = (e: any) => {
    e.target.placeholder = ''
  }
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
          <div className="w-full md:max-w-[496px] md:flex md:items-end">
            <div className="w-full flex gap-2 bg-off-white px-4 md:px-6 py-4 rounded-lg shadow-level2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.54167 2.5C5.21235 2.5 2.5 5.21235 2.5 8.54167C2.5 11.871 5.21235 14.5833 8.54167 14.5833C9.98182 14.5833 11.3057 14.0746 12.3454 13.2292L16.4331 17.3169C16.4907 17.3769 16.5597 17.4248 16.636 17.4578C16.7123 17.4907 16.7945 17.5082 16.8776 17.509C16.9608 17.5099 17.0433 17.4941 17.1202 17.4627C17.1972 17.4312 17.2672 17.3848 17.326 17.326C17.3848 17.2672 17.4312 17.1972 17.4627 17.1202C17.4941 17.0433 17.5099 16.9608 17.509 16.8776C17.5082 16.7945 17.4907 16.7123 17.4578 16.636C17.4248 16.5597 17.3769 16.4907 17.3169 16.4331L13.2292 12.3454C14.0746 11.3057 14.5833 9.98182 14.5833 8.54167C14.5833 5.21235 11.871 2.5 8.54167 2.5ZM8.54167 3.75C11.1954 3.75 13.3333 5.8879 13.3333 8.54167C13.3333 9.83442 12.8234 11.0024 11.9963 11.8628C11.9453 11.9003 11.9003 11.9453 11.8628 11.9963C11.0024 12.8234 9.83442 13.3333 8.54167 13.3333C5.8879 13.3333 3.75 11.1954 3.75 8.54167C3.75 5.8879 5.8879 3.75 8.54167 3.75Z"
                  fill="#6E6E6E"
                  stroke="#6E6E6E"
                  stroke-width="0.5"
                />
              </svg>
              <input
                className="w-full border-none outline-none placeholder:text-base placeholder:leading-[24px] placeholder:text-grey-8"
                placeholder={searchPlaceHolder}
                onChange={handleSearch}
                onClick={handleInputClick}
              />
            </div>
          </div>
        </div>
        {/* cards */}

        <div className="w-full flex flex-col gap-[32px]">
          <div className="w-full flex flex-col gap-[32px] md:flex-row md:justify-between md:items-center">
            <p className="w-full text-grey-9 text-base font-semibold leading-[20px]">
              All {sortedCards.length} specialties
            </p>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full md:max-w-[167px]  px-4 py-3 flex justify-between gap-2 relative cursor-pointer"
            >
              <p className="text-grey-8 text-base leading-[24px] whitespace-nowrap">
                <strong className='font-semibold'>Sorted by</strong> {selectedDropdown}
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#3C3C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {showDropdown && (
                <div className="absolute top-[50px] left-[80px]  cursor-pointer bg-off-white rounded-[8px] border-[1px] border-grey-3 overflow-hidden">
                  {selectedDropdown === 'A-Z' ? (
                    <p
                      onClick={() => handleSort('Z-A')}
                      className="text-grey-dark  leading-[24px] whitespace-nowrap px-4 py-3 hover:bg-grey-2"
                    >
                      Z-A
                    </p>
                  ) : (
                    <p
                      onClick={() => handleSort('A-Z')}
                      className="text-grey-8 text-base leading-[24px] whitespace-nowrap px-4 py-3 hover:bg-grey-2"
                    >
                      A-Z
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCards.map(({ primaryImg, title, tagline, slug }: any) => (
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
      </div>
    </section>
  )
}
