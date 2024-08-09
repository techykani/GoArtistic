import ReactPortableText from "../widgets/shared/reactPortableText"
import Title from "../widgets/shared/title"

export const PageOverview = ({ title, description, data }: any) => {
  return (<div className="w-full bg-[#004E89] px-6 md:px-[71px] py-[32px] md:py-[36px]">
    <div className="w-full max-w-[808px] mx-auto flex flex-col gap-6 md:gap-[36px] ">
      <div className="flex flex-col gap-4 md:gap-[36px]">
        {title && (
          <Title
            headingType="h2"
            className={`text-center font-montserrat !font-semibold`}
            theme={"dark"}
            tagline={title}
          />
        )}
        {description && (
          <p
            className="mt-[-24px] text-center"
          >
            <ReactPortableText content={description} theme={"dark"} />
          </p>
        )}
      </div>
      {
        data && <div className="w-full max-w-[677px] mx-auto flex flex-wrap md:flex-nowrap md:flex-row gap-[24px] justify-center md:justify-between">
          {data?.map((data: any) => (
            <div key={""} className="flex flex-col gap-[2px]">
              <div className="flex gap-6">
                <div className="w-[1.5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="38" viewBox="0 0 2 38" fill="none">
                    <rect x="0.5" width="1.5" height="38" rx="0.75" fill="#FEFEFE" />
                  </svg>
                </div>
                <Title tagline={data?.dataTitle} headingType={"h2"} />

              </div>
              <p className="pl-[25.5px] text-[#FEFEFE] leading-[24px]">{data?.subTitle}</p>
            </div>
          ))}
        </div>
      }
    </div>
  </div>)
}