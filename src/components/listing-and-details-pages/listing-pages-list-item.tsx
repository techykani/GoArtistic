import { Button } from '@/components/ui'
import { Calender } from '@/icons/calender'
import { imageUrlBuilder, PortableText } from '@/sanity'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { SanityImg } from 'sanity-react-extra'
import { staggerChild } from 'src/animations/stagging-scale-up'
import { ListingPageListItemsSchedule } from './listing-pages-items-schedule'
import { AllDocProps } from './search/search-main'

const packageHrefOnSearchPage = (path: string, type: string) => {
  const data = path === '/search' && type === 'package' ? '/services/packages' : path
  return data
}

export const ListingPageListItem: React.FC<AllDocProps> = ({
  _id,
  shortDes,
  slug,
  smImage,
  title,
  schedule,
  _type,
  endDate,
  ...rest
}) => {
  const router = useRouter()
  const itemHref = slug ? `${packageHrefOnSearchPage(router.pathname, _type)}/${slug.current}` : '#'

  return (
    <motion.li
      className="grid lg:grid-cols-2 bg-white rounded-[6.2px] shadow-listContainer group hover:shadow-point transition-all duration-300 pt-4 pr-4 pl-4 pb-4 xl:pt-6 xl:pr-6 lg:pb-0 lg:pl-0"
      variants={staggerChild}
    >
      {smImage && (
        <div className="transform translate-x-[-10%] translate-y-[-12%] rounded-[8px] overflow-hidden group-hover:drop-shadow-rised transition-all duration-300 lg:block hidden">
          <SanityImg
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300 max-h-[370px]"
            image={smImage}
            builder={imageUrlBuilder}
            alt={title}
            height={370}
          />
        </div>
      )}

      <div
        className={clsx('flex flex-col justify-between', smImage == undefined ? 'ml-6' : 'pl-1')}
      >
        <div>
          <div className="flex space-x-2">
            <div className="flex flex-col flex-1 space-y-2 lg:space-y-1 ">
              <h3 className="font-medium capitalize transition-colors duration-300 text-head-3 text-neutral-900 group-hover:text-link">
                {title}
              </h3>
              <p className="text-body-mn text-neutral-700">{shortDes}</p>
              {schedule ? (
                <div className="flex space-x-1 text-body-mn text-neutral-700">
                  <div>
                    <Calender className="w-4 h-4" />
                  </div>
                  <PortableText blocks={schedule} className="" />
                </div>
              ) : (
                ''
              )}
              <ListingPageListItemsSchedule endDate={endDate} />
            </div>
            {smImage && (
              <div className="block lg:hidden w-[71px] h-[91px]">
                <SanityImg
                  className="rounded-[8px] object-cover h-full"
                  image={smImage}
                  builder={imageUrlBuilder}
                  alt={title}
                  height={100}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <Link href={itemHref}>
            <div className="inline-block mt-5 transition-opacity duration-200 lg:opacity-0 group-hover:opacity-100 lg:mb-6">
              <Button
                size="sm"
                variant="solid"
                color="primary"
                className="px-4 py-3 font-semibold text-button-sm"
              >
                {router.pathname === '/services/clinical-services'
                  ? 'View service'
                  : router.pathname === '/services/centres-of-excellence'
                  ? 'View centre'
                  : router.pathname == '/learning-hub/disease-articles' ||
                    _type == 'article' ||
                    router.pathname == '/learning-hub/articles'
                  ? 'View article'
                  : 'View package'}
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </motion.li>
  )
}
