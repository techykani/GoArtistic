import style from '@/styles/Home.module.css'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export const MilestonesMD = ({ data }: any) => {
  // console.log(data, 'd')
  return (
    <>
      {/* 1991 */}
      <div className="w-full bg-[#FBFBFB] py-12 flex flex-col gap-6 px-6 md:px-[71px]">
        <div className="container mx-auto flex gap-6 items-center">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pr-[32px]">
            {data[0]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[0]?.title}
            </h2>}
            {data[0]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[0]?.caption}
            </p>}
            {data[0]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[0]?.description} />
            </div>}
          </div>
          {data[0]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[0]?.imagesList[0]?.mobileImage).url()}
              alt={data[0]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 1998 */}
      <div className="w-full bg-[#FBFBFB] flex flex-col gap-6 px-6 md:px-[71px]">
        <div className="container mx-auto flex flex-row-reverse gap-6 items-center">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pl-[32px]">
            {data[1]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[1]?.title}
            </h2>}
            {data[1]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[1]?.caption}
            </p>}
            {data[1]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[1]?.description} />
            </div>}
          </div>
          {data[1]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[1]?.imagesList[0]?.mobileImage).url()}
              alt={data[1]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 1999 */}
      <div className="w-full py-10 bg-[#0957CB] flex flex-col gap-6">
        <div className="px-6 md:px-[71px]">
          <div className="max-w-[859px] mx-auto flex flex-col gap-[6px]">
            {data[2]?.title && <h2
              className={`${style.montserrat}  text-[32px] font-bold leading-[38px] tracking-[0.32px] text-[#FEFEFE]`}
            >
              {data[2]?.title}
            </h2>}
            {data[2]?.caption && <p className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px]`}>
              {data[2]?.caption}
            </p>}
            {data[2]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[2]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>

      </div>
      {/* 1999 */}
      <div className="w-full bg-[#FBFBFB] py-12 flex flex-col gap-6 px-6 md:px-[71px]">
        <div className="container mx-auto flex gap-6 items-center">
          <div className="flex flex-col gap-[6px] w-1/2 lg:pr-8">
            {data[3]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[3]?.title}
            </h2>}
            {data[3]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[3]?.caption}
            </p>}
            {data[3]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[3]?.description} />
            </div>}
          </div>
          {data[3]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[3]?.imagesList[0]?.mobileImage).url()}
              alt={data[3]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>
      </div>
      {/* 2001 */}
      <div className='w-full bg-[#FEFEFE] px-6 md:px-[71px] '>
        <div className="container mx-auto flex flex-row-reverse gap-6 items-center">
          <div className="flex flex-col gap-[6px] w-1/2 lg:pl-8">
            {data[4]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[4]?.title}
            </h2>}
            {data[4]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[4]?.caption}
            </p>}
            {data[4]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[4]?.description} />
            </div>}
          </div>
          {data[4]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[4]?.imagesList[0]?.mobileImage).url()}
              alt={data[4]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={339}
              height={221}
            />
          </div>}
        </div>

      </div>
      {/* 2002 */}
      <div className="w-full h-full bg-[#FBFBFB] py-12 flex flex-col gap-6 relative max-h-[449px] overflow-hidden">
        {data[5]?.imagesList[0]?.mobileImage && <div className="w-full absolute inset-0 pageBanner_bg_gradient">
          <Image
            className={'w-full h-full object-cover'}
            src={urlForImage(data[5]?.imagesList[0]?.desktopImage).url()}
            alt={data[5]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={360}
            height={261}
          />
        </div>}
        <div className="px-6 md:px-[71px] relative z-10">
          <div className="container mx-auto flex flex-col gap-[6px]">
            {data[5]?.title && <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[5]?.title}
            </h2>}
            {data[5]?.caption && <p className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px]`}>
              {data[5]?.caption}
            </p>}
            {data[5]?.description && <div className="mt-[-24px] max-w-[400px]">
              <ReactPortableText content={data[5]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>

      </div>
      {/* 2008 */}
      <div className="w-full bg-[#FBFBFB] py-12  px-6 md:px-[71px]">
        <div className="container mx-auto flex  gap-6 items-center">
          <div className=" flex flex-col gap-[6px] w-1/2 lg:pr-8">
            {data[6]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[6]?.title}
            </h2>}
            {data[6]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[6]?.caption}
            </p>}
            {data[6]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[6]?.description} />
            </div>}
          </div>
          {data[6]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[6]?.imagesList[0]?.mobileImage).url()}
              alt={data[6]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2010 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px]">
        <div className="container mx-auto flex flex-row-reverse gap-6 items-center">
          <div className='w-1/2 flex flex-col gap-6'>
            <div className=" flex flex-col gap-[6px] lg:pl-8">
              {data[7]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
              >
                {data[7]?.title}
              </h2>}
              {data[7]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
                {data[7]?.caption}
              </p>}
              {data[7]?.description && <div className="mt-[-24px]">
                <ReactPortableText content={data[7]?.description} />
              </div>}
            </div>
            {data[7]?.imagesList[0]?.mobileImage && <div className="w-1/2 lg:pl-8">
              <Image
                className={'w-full '}
                src={urlForImage(data[7]?.imagesList[0]?.mobileImage).url()}
                alt={data[7]?.imagesList[0]?.mobileImage?.alt ?? ""}
                width={360}
                height={261}
              />
            </div>}
          </div>
          {data[7]?.imagesList[1]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[7]?.imagesList[1]?.mobileImage).url()}
              alt={data[7]?.imagesList[1]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>


      </div>
      {/* 2018 */}
      <div className="w-full bg-[#FBFBFB] flex gap-6 px-6 md:px-[71px] py-12">
        {/* {(data[8]?.imagesList[1]?.mobileImage || data[8]?.imagesList[1]?.desktopImage) && <div className="w-full">
          <Image
            className={'w-full'}
            src={urlForImage(data[8]?.imagesList[1]?.mobileImage).url()}
            alt={data[8]?.imagesList[1]?.mobileImage?.alt ?? ""}
            width={360}
            height={261}
          />
        </div>} */}
        <div className="container mx-auto flex gap-6 items-center">
          <div className=" flex flex-col gap-[6px] lg:pr-8 w-1/2">
            {data[8]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[8]?.title}
            </h2>}
            {data[8]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[8]?.caption}
            </p>}
            {data[8]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[8]?.description} />
            </div>}
          </div>
          {data[8]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[8]?.imagesList[0]?.mobileImage).url()}
              alt={data[8]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2019 */}
      <div className="w-full bg-[#FBFBFB] pt-[27px] pb-[321px] flex flex-col gap-6 relative overflow-hidden px-6 md:px-[71px]">
        {data[9]?.imagesList[0]?.desktopImage && <div className="w-full absolute inset-0">
          <Image
            className={'w-full h-full object-cover'}
            src={urlForImage(data[9]?.imagesList[0]?.desktopImage).url()}
            alt={data[9]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={360}
            height={261}
          />
        </div>}
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col ml-auto gap-[6px] max-w-[400px]">
            {data[9]?.title && <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[32px] font-bold leading-[38px] tracking-[0.32px] text-right`}
            >
              {data[9]?.title}
            </h2>}
            {data[9]?.caption && <p className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px] text-right`}>
              {data[9]?.caption}
            </p>}
            {data[9]?.description && <div className="mt-[-24px] text-right">
              <ReactPortableText content={data[9]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>

      </div>
      {/* 2019 */}
      <div className="w-full bg-[#FBFBFB] py-12  px-6 md:px-[71px]">
        <div className="container mx-auto flex gap-6 items-center">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pl-8">
            {data[10]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[10]?.title}
            </h2>}
            {data[10]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[10]?.caption}
            </p>}
            {data[10]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[10]?.description} />
            </div>}
          </div>
          {data[10]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[10]?.imagesList[0]?.mobileImage).url()}
              alt={data[10]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2019 */}
      <div className="w-full bg-[#FBFBFB]  px-6 md:px-[71px]">
        <div className="container mx-auto flex items-center flex-row-reverse gap-6">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pl-8">
            {data[11]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px]`}
            >
              {data[11]?.title}
            </h2>}
            {data[11]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}>
              {data[11]?.caption}
            </p>}
            {data[11]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[11]?.description} />
            </div>}
          </div>
          {data[11]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[11]?.imagesList[0]?.mobileImage).url()}
              alt=""
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2019 */}
      <div className="w-full bg-[#FBFBFB] pt-[27px] pb-[321px] relative overflow-hidden px-6 md:px-[71px]">
        {data[12]?.imagesList[0]?.desktopImage && <div className="w-full absolute inset-0">
          <Image
            className={'w-full h-full object-cover'}
            src={urlForImage(data[12]?.imagesList[0]?.desktopImage).url()}
            alt=""
            width={360}
            height={261}
          />
        </div>}
        <div className="container mx-auto relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-[6px] ml-auto max-w-[400px]">
            {data[12]?.title && <h2
              className={`${style.montserrat} text-[#3C3C3C] text-[32px] font-bold leading-[38px] tracking-[0.32px] text-right`}
            >
              {data[12]?.title}
            </h2>}
            {data[12]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] text-right`}>
              {data[12]?.caption}
            </p>}
            {data[12]?.description && <div className="mt-[-24px] text-right">
              <ReactPortableText content={data[12]?.description} />
            </div>}
          </div>
        </div>
      </div>
      {/* 2019 */}
      <div className="w-full py-20 max-w-[653px] mx-auto flex gap-[68px] items-center">
        {data[13]?.imagesList[0]?.desktopImage && <div className="w-full max-w-[195px]">
          <Image src={urlForImage(data[13]?.imagesList[0]?.desktopImage).url()}
            alt={data[13]?.imagesList[0]?.desktopImage?.alt ?? ""} className="w-full" width={195} height={57} />
        </div>}
        <div className="flex flex-col gap-2">
          {data[13]?.title && <h2 className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}>
            {data[13]?.title}
          </h2>}
          {data[13]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[390px] text-justify mt-[-24px]`}>
            <ReactPortableText content={data[13]?.description} />
          </div>}
        </div>
      </div>
      {/* 2019 */}
      <div className="w-full bg-[#FBFBFB] pt-[27px] pb-[181px] flex flex-col gap-6 relative overflow-hidden px-6 md:px-[71px]">
        {data[14]?.imagesList[0]?.desktopImage && <div className="w-full absolute inset-0 milestone_bg_gradient">
          <Image
            className={'w-full h-full object-cover'}
            src={urlForImage(data[14]?.imagesList[0]?.desktopImage).url()}
            alt={data[14]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={360}
            height={261}
          />
        </div>}
        <div className="container mx-auto relative z-10 flex gap-6">
          <div className="flex flex-col gap-[6px] max-w-[400px] ml-auto">
            {data[14]?.title && <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[32px] font-bold leading-[38px] tracking-[0.32px] text-right`}
            >
              {data[14]?.title}
            </h2>}
            {data[14]?.caption && <p className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px] text-right`}>
              {data[14]?.caption}
            </p>}
            {data[14]?.description && <div className="mt-[-24px] text-right">
              <ReactPortableText content={data[14]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>

      </div>
      {/* 2020 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px] pt-12 pb-[32px]  ">
        <div className="container mx-auto flex gap-6 items-center">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pr-8">
            {data[15]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px] `}
            >
              {data[15]?.title}
            </h2>}
            {data[15]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}>
              {data[15]?.caption}
            </p>}
            {data[15]?.description && <div className="mt-[-24px] ">
              <ReactPortableText content={data[15]?.description} />
            </div>}
          </div>
          {data[15]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[15]?.imagesList[0]?.mobileImage).url()}
              alt=""
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2021 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px] ">
        <div className="container mx-auto flex flex-row-reverse gap-6 items-center">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pl-8">
            {data[16]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px] `}
            >
              {data[16]?.title}
            </h2>}
            {data[16]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}>
              {data[16]?.caption}
            </p>}
            {data[16]?.description && <div className="mt-[-24px] ">
              <ReactPortableText content={data[16]?.description} />
            </div>}
          </div>
          {data[16]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[16]?.imagesList[0]?.mobileImage).url()}
              alt={data[16]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2023 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px] py-12  ">
        <div className="container mx-auto flex items-center gap-6">
          <div className="w-1/2 flex flex-col gap-[6px]  lg:pr-8">
            {data[17]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px] `}
            >
              {data[17]?.title}
            </h2>}
            {data[17]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}>
              {data[17]?.caption}
            </p>}
            {data[17]?.description && <div className="mt-[-24px] ">
              <ReactPortableText content={data[17]?.description} />
            </div>}
          </div>
          {data[17]?.imagesList[0]?.mobileImage && <div className="w-1/2 flex justify-center">
            <Image
              className={'w-full max-w-[207px]'}
              src={urlForImage(data[17]?.imagesList[0]?.mobileImage).url()}
              alt={data[17]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2023 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px] pb-12  ">
        <div className="container mx-auto flex flex-row-reverse items-center gap-6">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pl-8">
            {data[18]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px] `}
            >
              {data[18]?.title}
            </h2>}
            {data[18]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}>
              {data[18]?.caption}
            </p>}
            {data[18]?.description && <div className="mt-[-24px] ">
              <ReactPortableText content={data[18]?.description} />
            </div>}
          </div>
          {data[18]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[18]?.imagesList[0]?.mobileImage).url()}
              alt={data[18]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>

      </div>
      {/* 2023 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px] pb-12">
        <div className="container mx-auto flex items-center gap-6 ">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pr-8">
            {data[19]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px] `}
            >
              {data[19]?.title}
            </h2>}
            {data[19]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}>
              {data[19]?.caption}
            </p>}
            {data[19]?.description && <div className="mt-[-24px] ">
              <ReactPortableText content={data[19]?.description} />
            </div>}
          </div>
          {data[19]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[19]?.imagesList[0]?.mobileImage).url()}
              alt={data[19]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>
      </div>
      {/* 1999 */}
      <div className="w-full py-10 bg-[#009349]">
        <div className="px-6 md:px-[71px]">
          <div className="container mx-auto flex  gap-[20px] items-center">
            {data[20]?.title && <h2
              className={`${style.montserrat}  text-[32px] font-bold leading-[38px] tracking-[0.32px] text-[#FEFEFE]`}
            >
              {data[20]?.title}
            </h2>}
            {data[20]?.caption && <p className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px]`}>
              {data[20]?.caption}
            </p>}
            {data[20]?.description && <div className="mt-[-24px]">
              <ReactPortableText content={data[20]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>

      </div>
      {/* 2023 */}
      <div className="w-full bg-[#FBFBFB] px-6 md:px-[71px] py-12  ">
        <div className="container mx-auto flex items-center gap-6">
          <div className="w-1/2 flex flex-col gap-[6px] lg:pr-8">
            {data[21]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[32px] font-bold leading-[38px] tracking-[0.32px] `}
            >
              {data[21]?.title}
            </h2>}
            {data[21]?.caption && <p className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}>
              {data[21]?.caption}
            </p>}
            {data[21]?.description && <div className="mt-[-24px] ">
              <ReactPortableText content={data[21]?.description} />
            </div>}
          </div>
          {data[21]?.imagesList[0]?.mobileImage && <div className="w-1/2">
            <Image
              className={'w-full'}
              src={urlForImage(data[21]?.imagesList[0]?.mobileImage).url()}
              alt={data[21]?.imagesList[0]?.mobileImage?.alt ?? ""}
              width={360}
              height={261}
            />
          </div>}
        </div>
      </div>
    </>
  )
}
