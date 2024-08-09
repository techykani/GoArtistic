import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'

export const Podcast: React.FC<any> = ({
    podcast
}) => {
  return (
    <>
       <div className="max-w-[808px] mx-auto ">
       {podcast && (
            <iframe
              style={{ borderRadius: '12px' }}
              src={podcast}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}
        </div>


      </>
  )
}
