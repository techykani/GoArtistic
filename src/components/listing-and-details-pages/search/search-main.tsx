import React, { Fragment, useState } from 'react'
import { SanityImage } from 'sanity-react-extra'
import { useQuery } from 'react-query'
import { SearchPageTabs } from './sections/search-page-tabs'
import { SearchInput } from './sections/search-input'
import { useRouter } from 'next/router'
import { sanityClient } from '@/sanity'
import { queryAll } from '@/lib/queryClient'
import { AllResultsLoader } from '@/components/ui/loaders'
import { RelevantResults } from './sections/relevant-results'

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

export const SearchMain: React.FC<SearchMainProps> = ({
  inputPlaceholder,
  tabParameters,
  textWhenNoSearch,
  ...rest
}) => {
  const router = useRouter()

  const [selectedTab, setSelectedTab] = useState<string>(tabParameters[0])
  const [searchText, setSearchText] = useState(router.query.searchText || '')

  const fetchAll = async (searchText: string | string[]) => {
    const query = queryAll({
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

  return (
    <Fragment>
      <SearchInput
        placeholder={inputPlaceholder}
        setSearchText={setSearchText}
        searchText={searchText}
      />

      <section className="w-full py-6 bg-off-white">
        <div className=" max-w-[1016px] mx-auto">
          <SearchPageTabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            allDoc={allDoc}
            tabParameters={tabParameters}
          />
          {searchText ? (
            ''
          ) : (
            <div className="relative z-20 flex items-center justify-center h-[40vh]">
              {/* {textWhenNoSearch} */}
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
        <RelevantResults
          selectedTab={selectedTab}
          allData={allDoc}
          searchText={searchText}
          tabParameters={tabParameters}
          {...rest}
        />
      ) : (
        ''
      )}
    </Fragment>
  )
}
