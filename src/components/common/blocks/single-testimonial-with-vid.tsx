import { VideoPlayer } from '@/components/common/video-player'
import { CompactSectionBlock } from '@/components/ui/containers'
import { useIntersection, useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { SanityImage, SanityImg } from 'sanity-react-extra'

interface TestimonialProps {
  type: string
  name: string
  quote: string
  role: string
  thumbnailImg: SanityImage
  video: Video
  slug?: Slug
}

export const SingleTestimonialWithVid: React.FC<TestimonialProps> = ({
  name,
  role,
  quote,
  thumbnailImg,
  video,
  slug,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const [play, setPlay] = useState(false)
  const watchonViewRef = useRef(null)
  const sectionOnview = useIntersection(watchonViewRef)

  const vidRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    !sectionOnview?.isIntersecting && vidRef?.current?.pause()
  }, [sectionOnview?.isIntersecting])

  useEffect(() => {
    try {
      play && vidRef?.current?.play()
    } catch (e) {
      console.log(e)
    }
  }, [play, video])

  return (
    <CompactSectionBlock
      id={slug?.current}
      defaultPadding={false}
      className="flex md:flex-row flex-col-reverse 2xl:space-x-3 !p-0 rounded-[8px] "
    >
      <div className="xl:flex-[4] md:flex-[5] flex-1 flex flex-col justify-center items-center space-y-6 lg:space-y-5 bg-white 2xl:px-14 lg:px-6 px-4 2xl:py-3 lg:py-6 py-9 text-neutral-700 ">
        <q
          className={clsx(
            quote.length <= 80 ? 'text-head-2 lg:max-w-[400px]' : 'text-head-4 lg:max-w-[258px]',
            'text-center',
          )}
        >
          {quote}
        </q>
        <div>
          <span className="block text-center text-body-sm capitalize">{name}</span>
          <span className="block text-center text-body-sm">{role}</span>
        </div>
      </div>
      <div
        className={clsx(
          'lg:flex-[8] md:flex-[7] relative flex justify-center items-center h-[250px] sm:h-[320px] md:h-[355px] lg:h-[460px] overflow-hidden',
        )}
      >
        {video ? (
          <>
            {play ? (
              <VideoPlayer className="h-full w-full object-cover" vidRef={vidRef} video={video} />
            ) : (
              <>
                <SanityImg
                  className="w-full h-full object-cover"
                  image={thumbnailImg}
                  builder={imageUrlBuilder}
                  width={700}
                  alt="Testimonial's thumbnail"
                />
                <img
                  onClick={() => setPlay(true)}
                  className="absolute h-20 w-20 lg:h-28 lg:w-28 cursor-pointer hover:drop-shadow-rised hover:scale-105 transition-all duration-150"
                  src="/icons/play.svg"
                  alt="play icon"
                />
              </>
            )}
          </>
        ) : (
          <>
            <SanityImg
              className="w-full h-full object-cover "
              image={thumbnailImg}
              builder={imageUrlBuilder}
              width={800}
              alt="Testimonial's thumbnail"
            />
          </>
        )}
      </div>
    </CompactSectionBlock>
  )
}
