import { PortableText } from '@/sanity'
import { Subsection } from '@/lib/types/detailsPagesTypes'
import { serializers } from '@/lib/blockContent'

interface Props {
  subsection: Subsection
}

export const SubsectionTitleDescription: React.FC<Props> = ({
  subsection: { title, description },
}) => {
  return (
    <>
      <h3 className="text-left font-medium lg:text-head-3 text-res-head-3 text-neutral-700 mb-2">
        {title}
      </h3>
      <h4 className="text-left text-neutral-700 mb-10">
        <PortableText blocks={description} serializers={serializers} />
      </h4>
    </>
  )
}
