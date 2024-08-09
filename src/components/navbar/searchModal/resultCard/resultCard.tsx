import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerChild } from 'src/animations/stagging-scale-up'
import router from 'next/router'
import { GTAEvent } from '@/lib/gtag'
const getDocUrl = (slug: Slug, type: string, onClose: any) => {
  if (type == 'doctor') {
    router.push(
      {
        pathname: `/doctors/${slug?.current}`,
      },
      undefined,
      { shallow: true },
    )
  } else if (type == 'package') {
    router.push(
      {
        pathname: `/services/health-screening/${slug?.current}`,
      },
      undefined,
      { shallow: true },
    )
  } else if (type == 'specialtyList') {
    router.push(
      {
        pathname: `/services/medical-specialties/${slug?.current}`,
      },
      undefined,
      { shallow: true },
    )
  } else if (type == 'media') {
    router.push(
      {
        pathname: `/media/${slug?.current}`,
      },
      undefined,
      { shallow: true },
    )
  } else if (type == 'insights') {
    router.push(
      {
        pathname: `/insights/${slug?.current}`,
      },
      undefined,
      { shallow: true },
    )
  }
  onClose()
}
export const ResultCard: React.FC<any> = ({ _type, title, name, slug, onClose }) => {
  return (
    <motion.div variants={staggerChild}>
      <div>
        <div
          className="cursor-pointer"
          onClick={() => {
            GTAEvent('select_search_results', {
              content_name: title ? title : name,
              content_type: _type,
            })
            getDocUrl(slug, _type, onClose)
          }}
        >
          <div className="mt-6">
            <div className="max-w-[1016px] mx-auto flex flex-col gap-4">
              {title && (
                <p className="text-grey-dark text-[14px] leading-[20px] font-normal truncate-overflow">
                  {title}
                </p>
              )}
              {name && (
                <p className="text-grey-dark text-[14px] leading-[20px] font-normal">{name}</p>
              )}
            </div>
          </div>
          {/* <div className="w-full py-4 flex gap-4 md:gap-8">
          
            <div className="md:pt-4 flex-1">
            <p className="text-[#0084C6] text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px] mb-1 md:mb-[6px]">
                {title?.substring(0, 100)}
              </p>
              {name && (
                <h2 className="text-[#0084C6] text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px] mb-1 md:mb-[6px]">
                  {name}
                </h2>
              )}
        
            </div>
          </div> */}
          {/* <span className="h-[1px] w-full block bg-[#D2D2D2]"></span> */}
        </div>
      </div>
    </motion.div>
  )
}
