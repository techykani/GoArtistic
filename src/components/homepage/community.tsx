import { SixColCardListing } from '../widgets/blocks/cardListing/primary/sixColListing'

const Community = ({ title, description, tagline, points, cta }: any) => {
  return (
    <section className="bg-[#FEFEFE] px-6 md:px-[71px] py-12 md:py-20">
      <SixColCardListing title={title} tagline={tagline} points={points} description={description} link={cta} target={'_self'} btnType={'primary'} arrowVisibility={false}
        theme={"light"}
        customStyle={""}
        size={"medium"}
        arrowColor={"black"} />
    </section>
  )
}

export default Community
