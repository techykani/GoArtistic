import { useWindowSize } from '@/lib/hooks'
import OverView from '../widgets/blocks/overView'

export const TitleDescription: React.FC<any> = ({
  title,
  tagline,
  description,
  cta,
  classNameValues,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      {title && description && (
        <div className="bg-primary-blue py-8 md:py-[36px]">
          <OverView
            title={title}
            description={description}
            theme="dark"
            contentWidth="container text-center"
          />
        </div>
      )}
    </>
  )
}
