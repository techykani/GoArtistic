import OneImageFlexHalf from '../widgets/blocks/oneImageFlexHalf'

const InvestmentPotential = ({ image, description, tagline, title, button }: any) => {
  return (
    <section className="bg-[#FEFEFE] w-full px-6 md:px-[71px] py-[48px] md:py-[80px]">
      <OneImageFlexHalf
        image={image}
        description={description}
        tagline={tagline}
        title={title}
        button={button}
        layout="content-right"
      />
    </section>
  )
}

export default InvestmentPotential
