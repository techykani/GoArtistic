export interface PageOverViewProps {
  title: string
  description: string
}

const PageOverView = ({ title, description }: PageOverViewProps) => {
  return (
    <section className="w-full bg-[#003964] px-6 md:px-[71px] py-[48px] md:py-[64px]">
      <div className="max-w-[808px] mx-auto flex flex-col gap-4">
        <h2 className="text-off-white text-[28px] md:text-[36px] font-semibold leading-[36px] md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px] text-center">
          {title}
        </h2>
        <div className="text-grey-1 text-base leading-[24px] text-center">{description}</div>
      </div>
    </section>
  )
}

export default PageOverView
