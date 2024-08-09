import { GTAEvent } from '@/lib/gtag'

export const TabFilter: React.FC<any> = ({
  options,
  filters,
  selectedIndex,
  setSelectedIndex,
  setFilters,
  sliderPosition,
}) => {
  return (
    <div
      style={{ paddingRight: sliderPosition, paddingLeft: sliderPosition }}
      className="flex gap-3 overflow-scroll slider-body"
    >
      {options.map((tab: any, i: any) => (
        <div
          key={i}
          onClick={(eve: any) => {
            setFilters((prevObject: any) => ({
              ...prevObject, // spread the existing properties
              selectedType: eve.target.innerText,
            })),
              setSelectedIndex(i),
              GTAEvent('view_content', {
                content_name: '',
                content_type: eve.target.innerText,
              })
          }}
          className={`text-base font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap whitesapce-nowrap transition-all duration-150 cursor-pointer ${
            i === selectedIndex
              ? 'bg-secondary-ocean text-off-white'
              : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
          }  `}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
