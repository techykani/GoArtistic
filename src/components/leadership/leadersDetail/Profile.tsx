import { Button, LinkAngleRight } from '@/components/ui'
import { useEffect, useState } from 'react'
import Title from '@/components/widgets/shared/title'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import style from '@/styles/Home.module.css';
import { urlForImage } from '@/studio/lib/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Profile: React.FC<any> = (data: any) => {
  const [otherMembers, setOtherMember] = useState([]);;
  const router = useRouter();
  console.log(router.asPath, 'j')

  const sortMembers = (data: any) => {
    console.log(data?.page?.leaders?.sections?.tab?.executiveLeadershipContent?.leaders, 'k');
    console.log(router?.query?.slug, 'p')
    const membersData = data?.page?.leaders?.sections?.tab?.executiveLeadershipContent?.leaders?.filter((data: any) => {
      return data?.slug !== router?.query?.slug
    });

    setOtherMember(membersData);

  }

  useEffect(() => {
    sortMembers(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query?.slug]);



  return (
    <>
      <section className="w-full md:px-[71px] md:pt-[64px] md:pb-[80px] ">
        <div className="container mx-auto flex flex-col md:flex-row md:gap-6">

          <div className="h-full  md:max-w-[392px] md:min-w-[392px]">
            <div className="flex flex-col md:rounded-[16px] overflow-hidden">

              <div
                style={{ backgroundImage: `url(${urlForImage(data?.page?.profileImage).url()})` }}
                className="w-full relative bg-cover aspect-[6/5]"
              ></div>


              <div className="w-full px-6 pt-8 md:pt-6  md:pb-6 flex flex-col gap-6  ">
                <div className="w-full flex flex-col gap-2 text-center">
                  {data?.page?.name && <Title headingType="h3" tagline={data?.page?.name} theme="light" className="!text-[#0957CB]" />}
                  {data?.page?.designation && <p className="text-[#6E6E6E] leading-[24px]">
                    {data?.page?.designation}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            {data?.page?.introDescription && <div className="flex-1 py-[32px] px-6 md:px-10 bg-off-white md:rounded-[16px] flex flex-col gap-8 md:shadow-megaMenu custom-list-roman">
              <div className='mt-[-24px]'>
                <ReactPortableText content={data?.page?.introDescription} />
              </div>
            </div>}
          </div>
        </div>
      </section>

      <section className='bg-[#F1F6FF] py-[36px] md:py-[60px] px-6 md:px-[71px]'>
        <div className="container mx-auto flex flex-col gap-6">
          <Title headingType="h2" tagline={"Other members"} theme="light" />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {otherMembers?.slice(0, 8)?.map((data: any) => (
              <Link href={`/about-hmi-medical/governance/${data?.slug}`} key={data?.name} style={{ boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.04)" }} className='bg-[#FEFEFE] rounded-xl p-6 flex flex-col gap-1'>
                <div className='pl-[12px] relative'>
                  <div className='absolute left-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                      <rect width="1.5" height="22" rx="0.75" fill="#00A854" />
                    </svg>
                  </div>
                  <p className={`${style.montserrat} text-[18px] font-semibold leading-[22px]`}>{data?.name}</p>
                </div>
                <p className='pl-3 text-[#6E6E6E] leading-[24px]'>{data?.designation}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Profile
