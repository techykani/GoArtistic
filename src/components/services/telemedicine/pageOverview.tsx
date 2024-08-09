import OverView from '@/components/widgets/blocks/overView';
import { PortableText } from '@/sanity'

const PageOverViewSec = ({ title, description }: { title: string; description: string }) => {
  return (
    <section className="w-full bg-[#004E89] py-8 md:py-[36px]">
      <OverView title={title} description={description} theme="dark" contentWidth="max-w-[1016px]" />
    </section>
  )
}

export default PageOverViewSec
