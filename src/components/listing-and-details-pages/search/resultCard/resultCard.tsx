import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerChild } from 'src/animations/stagging-scale-up'
import Image from 'next/image'
const getDocUrl = (slug: Slug, type: string) => {
  switch (type) {
    case 'doctor':
      return `/doctors/${slug?.current}`

    case 'package':
      return `/services/health-screening/${slug?.current}`

    case `specialtyList`:
      return `/services/medical-specialties/${slug?.current}`

    case `media`:
      return `/media/${slug?.current}`

    case `insights`:
      return `/insights/${slug?.current}`

    default:
      return '#'
  }
}
export const ResultCard: React.FC<any> = ({
  _type,
  title,
  field_of_expertise,
  name,
  shortDes,
  tagline,
  slug,
  about,
  photo,
  seo,
  primaryImg,
  iconurl,
}) => {
  return (
    <motion.div variants={staggerChild}>
      <div>
        <Link href={getDocUrl(slug, _type)}>
          <div className="w-full py-4 flex gap-4 md:gap-8">
            <div className="min-w-[80px] max-w-[80px]  md:min-w-[210px] md:max-w-[210px]">
              {photo && (
                <Image
                  src={photo}
                  width={200}
                  height={200}
                  alt=""
                  className="w-full h-[63px] md:min-h-[175px] object-cover rounded-lg"
                />
              )}
              {iconurl && (
                <Image
                  src={iconurl}
                  width={200}
                  height={200}
                  alt=""
                  className="w-full h-[63px] md:min-h-[175px] object-cover rounded-lg"
                />
              )}
              {primaryImg && (
                <Image
                  src={primaryImg}
                  width={200}
                  height={200}
                  alt=""
                  className="w-full h-[63px] md:min-h-[175px] object-cover rounded-lg"
                />
              )}
            </div>
            <div className="md:pt-4 flex-1">
              <p className="text-[#0957CB] text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px] mb-1 md:mb-[6px]">
                {title?.substring(0, 100)}
              </p>
              {name && (
                <h2 className="text-[#0957CB] text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px] mb-1 md:mb-[6px]">
                  {name}
                </h2>
              )}
              {about?.description && (
                <p className="text-base text-grey-darkest">
                  {about?.description[0]?.children[0]?.text}
                </p>
              )}
              {seo && <p className="text-base text-grey-darkest">{seo?.description}</p>}
              {/* {tagline && <p className="text-base text-grey-darkest">{tagline}</p>} */}
              {/* {shortDes && <p className="text-base text-grey-darkest">{shortDes}</p>} */}
              <span className="text-grey-8 text-sm mt-4">
                {_type.charAt(0).toUpperCase() + _type.slice(1)}
              </span>
            </div>
          </div>
          <span className="h-[1px] w-full block bg-[#D2D2D2]"></span>
        </Link>
      </div>
    </motion.div>
  )
}
