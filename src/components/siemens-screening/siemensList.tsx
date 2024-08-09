import Title from '@/components/widgets/shared/title'
import { SiemensPackageListItem } from './packageListItem'

export const SiemensList: React.FC<any> = ({ packages }) => {
  return (
    <div className="relative py-[48px] md:py-[80px] bg-[#F1F6FF]">
      <div className='px-6 md:px-[71px] pb-[24px] md:pb-[36px]'>
        <div className='container mx-auto'>
           {/* heading */}
        <Title tagline={'Siemens Corporate Screening Packages'} headingType={'h2'} theme='light' />
        </div>
      </div>
      
      <section className="px-6 md:px-[71px] pt-[24px] md:pt-[32px]">
        <div className="container mx-auto flex flex-col gap-[24px] md:gap-[36px]">
          {/* listing */}
          <div className="w-full flex flex-col gap-6 md:gap-8">
        
            {/* card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl2:grid-cols-4 gap-6">
        {/* card */}
        {packages?.map((props: any, idx: any) => (
          <SiemensPackageListItem
            key={idx}
            props={props}
          />
        ))}
      </div>
          </div>
          {/* pagination */}
        </div>
      </section>

    </div>
  )
}
