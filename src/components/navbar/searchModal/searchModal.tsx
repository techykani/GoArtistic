import { IoSearch } from 'react-icons/io5'
import EyeBrew from '../../widgets/shared/eyeBrew'
import BtnWithArrow from '../../widgets/shared/buttons/button/btnWithArrow'
import router from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { SearchInput } from './sections/search-input'
import { queryTitleAll } from '@/lib/queryClient'
import { sanityClient } from '@/sanity'
import { useQuery } from 'react-query'
import { SearchPageTabs } from './sections/search-page-tabs'
import { AllResultsLoader } from '@/components/ui/loaders'
import { RelevantResults } from './sections/relevant-results'
import { SanityImage } from 'sanity-react-extra'
import Link from 'next/link'
import { useWindowSize } from '@/lib/hooks'
import { GTAEvent } from '@/lib/gtag'
interface SearchMainProps {
  inputPlaceholder: string
  searchResultText: string
  noSearchResultText: string
  seeMoreButtonText: string[]
  tabParameters: string[]
  searchResultSectionTitle: string
  sortParametersByText: string[]
  sortParametersByDate: string[]
  textWhenNoSearch: string
  seeLessButtonText: string[]
}

export interface AllDocProps {
  _type: string
  _id: string
  slug: Slug
  consultation_hours: ConsultationHour[]
  name: string
  title: string
  shortDes: string
  field_of_expertise: string
  image: SanityImage & ImageAlt
  smImage: SanityImage & ImageAlt
  endDate?: string
  schedule?: PortableText
  doc_count: number //ToDo: have to look into it
  answer: PortableText
  question: string
  articleTag?: string
  articleDate?: string
  releaseDate?: string
}

export const filterByDoc = (allDoc: AllDocProps[], docName: string) => {
  return allDoc.filter((doc) => doc._type === docName)
}

const fakeData = [
  {
    text: 'General Consultation',
    href: '/services/general-practice',
  },
  {
    text: 'Health Screenings',
    href: '/services/health-screening',
  },
  {
    text: 'Specialists',
    href: '/services/medical-specialties',
  },
  {
    text: 'Corporate Care',
    href: '/corporate-care',
  },
  // {
  //   text: 'Urgent Care',
  //   href: '/services/urgent-care',
  // },
]

export const Searchmodal = ({ isOpen, onClose, searchData }: any) => {
  const { inputPlaceholder, tabParameters, textWhenNoSearch, ...rest } = searchData
  const [selectedTab, setSelectedTab] = useState<string>(tabParameters[0])
  const [searchText, setSearchText] = useState('')

  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])
  const fetchAll = async (searchText: string | string[]) => {
    const query = queryTitleAll({
      searchText,
    })

    const results = await sanityClient('anonymous').fetch(query, {
      locale: router.locale,
      defaultLocale: 'en-my',
    })

    return results
  }

  const { data: allDoc, isLoading } = useQuery<AllDocProps[], Error>(
    ['allDoc', searchText],
    () => fetchAll(searchText),
    {
      refetchOnWindowFocus: false,
      enabled: !!searchText,
    },
  )
  const handleEnter = () => {
    router.push(
      {
        pathname: '/search',
        query: { searchText: searchText },
      },
      undefined,
      { shallow: true },
    )
    onClose()
  }
  if (!isOpen) return null
  return (
    <div className="py-[27px] md:py-[80px] flex flex-col gap-[43px] md:gap-[128px]">
      <div className="px-6 md:px-[71px]">
        <div className="flex justify-end max-w-[1016px] mx-auto cursor-pointer" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_1785_19904)">
              <mask
                id="mask0_1785_19904"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1785_19904)">
                <path
                  d="M16.0001 17.8667L9.46673 24.4001C9.22229 24.6445 8.91118 24.7667 8.5334 24.7667C8.15562 24.7667 7.84451 24.6445 7.60007 24.4001C7.35562 24.1556 7.2334 23.8445 7.2334 23.4667C7.2334 23.089 7.35562 22.7778 7.60007 22.5334L14.1334 16.0001L7.60007 9.46673C7.35562 9.22229 7.2334 8.91118 7.2334 8.5334C7.2334 8.15562 7.35562 7.84451 7.60007 7.60007C7.84451 7.35562 8.15562 7.2334 8.5334 7.2334C8.91118 7.2334 9.22229 7.35562 9.46673 7.60007L16.0001 14.1334L22.5334 7.60007C22.7778 7.35562 23.089 7.2334 23.4667 7.2334C23.8445 7.2334 24.1556 7.35562 24.4001 7.60007C24.6445 7.84451 24.7667 8.15562 24.7667 8.5334C24.7667 8.91118 24.6445 9.22229 24.4001 9.46673L17.8667 16.0001L24.4001 22.5334C24.6445 22.7778 24.7667 23.089 24.7667 23.4667C24.7667 23.8445 24.6445 24.1556 24.4001 24.4001C24.1556 24.6445 23.8445 24.7667 23.4667 24.7667C23.089 24.7667 22.7778 24.6445 22.5334 24.4001L16.0001 17.8667Z"
                  fill="#3C3C3C"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1785_19904">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="w-full flex flex-col gap-12">
        <div className="px-6 md:px-[71px]">
          <div ref={headingRef} className="max-w-[1016px] mx-auto flex items-center shadow-level-2">
            <div className="rounded-lg bg-off-white flex items-center px-5  gap-4 flex-1">
              <label className="py-4" htmlFor="searchInput">
                <IoSearch className="text-grey-8 text-xl leading-5" />
              </label>
              <SearchInput
                placeholder={inputPlaceholder}
                setSearchText={setSearchText}
                searchText={searchText}
              />
            </div>
          </div>
        </div>
        {searchText.length > 0 ? (
          <div className="w-full">
            <section className="w-full">
              <div
                style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
                className="relative"
              >
                <SearchPageTabs
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  allDoc={allDoc}
                  tabParameters={tabParameters}
                  sliderPosition={sliderPosition}
                />

                {searchText ? (
                  ''
                ) : (
                  <div className="relative z-20 flex items-center justify-center h-[40vh]">
                    {textWhenNoSearch}
                  </div>
                )}

                <div className="space-y-[1px]">
                  {isLoading
                    ? Array.from({ length: 6 }).map((item, idx) => (
                        <AllResultsLoader key={idx} uniqueKey={`on-selling-${idx}`} />
                      ))
                    : ''}
                </div>
              </div>
            </section>

            {allDoc ? (
              <>
                <RelevantResults
                  selectedTab={selectedTab}
                  allData={allDoc}
                  onClose={onClose}
                  searchText={searchText}
                  tabParameters={tabParameters}
                  {...rest}
                />
                <div className="max-w-[1016px] py-6 flex flex-col mx-auto border-b-[1px] border-x-0 border-b-[#D2D2D2] mb-[48px] gap-6"></div>
                <div className="w-full flex justify-center pb-[53px] md:pb-0">
                  <div
                    onClick={() => handleEnter()}
                    // onClick={() => setShowQuizPopup(true)}
                    className={`btn_tertiary_medium-light font-semibold leading-[20px] flex gap-2 items-center group cursor-pointer border-[2px] border-grey-dark py-3 px-6 rounded-full`}
                  >
                    See all results
                    <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.8925 6.89447C15.283 6.50394 15.9162 6.50393 16.3067 6.89444L20.7052 11.2928C20.8927 11.4803 20.9981 11.7347 20.9981 11.9999C20.9981 12.2651 20.8927 12.5195 20.7052 12.707L16.3067 17.1055C15.9162 17.496 15.283 17.496 14.8925 17.1055C14.502 16.715 14.502 16.0818 14.8925 15.6913L17.5839 12.9999H3.99805C3.44576 12.9999 2.99805 12.5522 2.99805 11.9999C2.99805 11.4476 3.44576 10.9999 3.99805 10.9999H17.5838L14.8925 8.30868C14.502 7.91816 14.502 7.285 14.8925 6.89447Z"
                          fill="#3C3C3C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        ) : (
          <div className="px-6 md:px-[71px]">
            <div className="max-w-[1016px] mx-auto border-y-[1px] border-x-0 border-y-[#D2D2D2] py-6 flex flex-col gap-6">
              <EyeBrew theme="light" title="Popular searches" />
              <div className="grid grid-col-1 md:grid-cols-2 gap-4" onClick={onClose}>
                {fakeData.map((data, i) => (
                  <BtnWithArrow
                    key={i}
                    link={data}
                    target={'_self'}
                    rel=""
                    btnType="tertiary"
                    arrowVisibility={true}
                    theme="light"
                    customStyle=""
                    size="medium"
                    arrowColor="black"
                    gtag_event="select_content"
                    gtag_content_name=""
                    gtag_content_type=""
                    gtag_cta_button={data.text}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Searchmodal
