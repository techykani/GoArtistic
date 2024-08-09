import { Button, LinkAngleRight } from '@/components/ui'
import { useState } from 'react'
import Title from '@/components/widgets/shared/title'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import style from '@/styles/Home.module.css';

const Profile: React.FC<any> = ({ title, description, cta, detail }: any) => {


  return (
    <section className="w-full md:px-[71px] md:pt-[64px] md:pb-[80px] bg-[#F1F6FF]">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
        {/* profile */}
        <div className="h-full md:shadow-megaMenu md:max-w-[392px] md:min-w-[392px]">
          <div className="flex flex-col md:rounded-[16px] overflow-hidden">
            {/* profile image */}
            {/* <div
              style={{ backgroundImage: `url(${photo})` }}
              className="w-full relative bg-cover aspect-[6/5]"
            ></div> */}
            {/* content */}
            <div className="w-full px-6 pt-8 md:pt-6  md:pb-6 flex flex-col gap-6 bg-off-white ">
              <div className="w-full flex flex-col gap-2 ">
                <Title headingType="h3" tagline={title} theme="light" className="!text-[#0957CB]" />
                <div className='mt-[-24px]'>
                  {/* <p className="text-[#6E6E6E] leading-[24px]">Your message is submitted easily and securely by following the instructions in the form. After having sent your message you will receive an ID and a password on the screen. Save these in a secure manner. You will remain anonymous throughout this dialogue.
                    Within 10 calendar days, we may post a response or follow-up question for you.</p>
                  <p className="text-[#6E6E6E] leading-[24px] mt-[24px]">
                    Within 10 calendar days, we may post a response or follow-up question for you.</p> */}
                  <ReactPortableText content={description} />
                </div>
              </div>


              {cta?.text && <div className="w-full flex justify-center">
                <Button
                  size="base"
                  variant="solid"
                  color="primary"
                  className="btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center"
                >
                  <LinkAngleRight
                    href={cta?.href ?? ''}
                    color="white"
                    gtag_event="form_start"
                    gtag_content_name={""}
                    gtag_content_type={"Submit an anonymous message"}
                    gtag_cta_button={'Make a report'}
                  >
                    {cta?.text}
                  </LinkAngleRight>
                </Button>
              </div>}
            </div>
          </div>
        </div>
        {/* divider */}
        {/* <div className="bg-grey-3 w-full h-[1px] md:hidden " /> */}
        {/* detail */}
        <div className="flex-1 py-[32px] px-6 md:px-10 bg-off-white md:rounded-[16px] flex flex-col gap-8 md:shadow-megaMenu custom-list-roman">
          {detail?.map((desc: any, i: number) => (
            <div key={i} className=''>
              {desc?.subTitle && <h3 className={`${style.montserrat} text-[#0957CB] text-[20px] font-semibold leading-[24px] mb-4`}>{desc?.subTitle}</h3>}
              <div className="mt-[-24px]"><ReactPortableText content={desc?.detail} /></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profile
