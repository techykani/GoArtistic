import Title from "../widgets/shared/title"
import style from '@/styles/Home.module.css';

export const BoardOfDirectors = ({ data }: any) => {
  return (
    <div className="bg-[#FEFEFE] px-6 md:px-[71px] py-8 md:py-20">
      <div className="max-w-[1016px] mx-auto flex flex-col md:flex-row md:justify-between gap-2 md:gap-6">
        <Title tagline={data?.subTitle} headingType={"h2"} theme="light" className="max-w-[392px]" />
        <div className="flex flex-col gap-[36px] md:gap-10">
          {data?.boards?.map((board: any, i: number) => (
            <div key={i} className="flex flex-col">
              {board?.boardName && <p className={`${style.montserrat} text-[#AAA] text-[24px] font-medium leading-[28px]`}>{board?.boardName}</p>}
              {
                board?.boardMembers?.map((member: any) => (
                  <div key={member._key} className="py-[10px] flex flex-col gap-1">
                    <p className={`${style.montserrat} text-[#5A5A5A] text-[22px] font-semibold leading-[24px]`}>{member?.memberName}</p>
                    <p className="text-[#5A5A5A] leading-[20px]">{member?.caption}</p>
                  </div>
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}