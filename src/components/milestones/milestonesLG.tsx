import Title from '../widgets/shared/title'
import style from '@/styles/Home.module.css'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { urlForImage } from '@/studio/lib/image'

export const MilestonesLG = ({ data }: any) => {
  const section1 = useRef(null)
  const section1Scroll = useScroll({
    target: section1,
    offset: ['start start', 'end start'],
  })
  const section1Small = useTransform(section1Scroll.scrollYProgress, [0, 1], [0, -200])
  const section1Medium = useTransform(section1Scroll.scrollYProgress, [0, 1], [0, -250])
  const section1Large = useTransform(section1Scroll.scrollYProgress, [0, 1], [0, -350])

  const section3 = useRef(null)
  const section3Scroll = useScroll({
    target: section3,
    offset: ['start end', 'end start'],
  })
  const section3Small = useTransform(section3Scroll.scrollYProgress, [0, 1], [0, -150])
  const section3Medium = useTransform(section3Scroll.scrollYProgress, [0, 1], [0, -250])
  const section3Large = useTransform(section3Scroll.scrollYProgress, [0, 1], [0, -350])

  const section5 = useRef(null)
  const section5Scroll = useScroll({
    target: section5,
    offset: ['start end', 'end start'],
  })
  const section5Small = useTransform(section5Scroll.scrollYProgress, [0, 1], [0, 100])
  const section5Medium = useTransform(section5Scroll.scrollYProgress, [0, 1], [0, -150])
  const section5Large = useTransform(section5Scroll.scrollYProgress, [0, 1], [0, 300])

  const section6 = useRef(null)
  const section6Scroll = useScroll({
    target: section6,
    offset: ['start end', 'end start'],
  })
  const section6Small = useTransform(section6Scroll.scrollYProgress, [0, 1], [0, -150])
  const section6Medium = useTransform(section6Scroll.scrollYProgress, [0, 1], [0, -150])
  const section6Large = useTransform(section6Scroll.scrollYProgress, [0, 1], [0, 300])

  const section7 = useRef(null)
  const section7Scroll = useScroll({
    target: section7,
    offset: ['start end', 'end start'],
  })
  const section7Small = useTransform(section7Scroll.scrollYProgress, [0, 1], [0, -150])
  const section7Medium = useTransform(section7Scroll.scrollYProgress, [0, 1], [0, -150])
  const section7Large = useTransform(section7Scroll.scrollYProgress, [0, 1], [0, 300])

  const section10 = useRef(null)
  const section10Scroll = useScroll({
    target: section10,
    offset: ['start end', 'end start'],
  })
  const section10Small = useTransform(section10Scroll.scrollYProgress, [0, 1], [0, -150])
  const section10Medium = useTransform(section10Scroll.scrollYProgress, [0, 1], [0, -150])
  const section10Large = useTransform(section10Scroll.scrollYProgress, [0, 1], [0, 300])

  const section11 = useRef(null)
  const section11Scroll = useScroll({
    target: section11,
    offset: ['start end', 'end start'],
  })
  const section11Small = useTransform(section11Scroll.scrollYProgress, [0, 1], [0, -150])
  const section11Medium = useTransform(section11Scroll.scrollYProgress, [0, 1], [0, -150])
  const section11Large = useTransform(section11Scroll.scrollYProgress, [0, 1], [0, 300])

  const section13 = useRef(null)
  const section13Scroll = useScroll({
    target: section13,
    offset: ['start end', 'end start'],
  })
  const section13Small = useTransform(section13Scroll.scrollYProgress, [0, 1], [0, 150])
  const section13Medium = useTransform(section13Scroll.scrollYProgress, [0, 1], [0, -150])
  const section13Large = useTransform(section13Scroll.scrollYProgress, [0, 1], [0, -350])

  return (
    <section className="bg-[#FEFEFE] relative w-full h-[9092px]">
      {/* section1 */}
      <div ref={section1} className="max-w-[1366px] mx-auto relative h-[895px]">
        <div className="absolute top-[50px] lg:left-[175px]">
          <div className="w-full max-w-[766px] flex flex-col gap-[16px]">
            <div className="flex flex-col gap-2">
              {data[0]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}
              >
                {data[0]?.title}
              </h2>}
              {data[0]?.caption && <p
                className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}
              >
                {data[0]?.caption}
              </p>}
              {data[0]?.description && <div className={`mt-[-24px] w-full max-w-[600px]`}>
                <ReactPortableText content={data[0]?.description} />
              </div>}
            </div>
            {data[0]?.imagesList[0]?.desktopImage && <div className="w-full">
              <Image
                className="w-full"
                src={urlForImage(data[0]?.imagesList[0]?.desktopImage).url()}
                alt={data[0]?.imagesList[0]?.desktopImage?.alt ?? ""}
                width={766}
                height={454}

              />
            </div>}
          </div>
        </div>
        <motion.div
          style={{ y: section1Medium }}
          className="absolute top-[434px] right-[81px] w-full max-w-[288px] flex-col gap-2"
        >
          {data[1]?.title && <h2 className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}>
            {data[1]?.title}
          </h2>}
          {data[1]?.caption && <p
            className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}
          >
            {data[1]?.caption}
          </p>}
          {data[1]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[600px]`}>
            <ReactPortableText content={data[1]?.description} />
          </div>}
        </motion.div>
        {data[1]?.imagesList[0]?.desktopImage && <motion.div
          // style={{ y: section1Small }}
          className="absolute bottom-0 left-[329px] z-50 w-full  max-w-[743px] "
        >
          <Image
            className="w-full"
            src={urlForImage(data[1]?.imagesList[0]?.desktopImage).url()}
            alt={data[1]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={743}
            height={595}
          />
        </motion.div>}
        <div className="absolute top-[570px] left-[31px] z-[5] w-full h-full max-w-[743px] max-h-[595px]">
          <p className={`${style.montserrat} text-[#F7F9FE] text-[201px] font-bold leading-normal`}>
            1998
          </p>
        </div>
      </div>
      {/* section2 */}
      <div className="w-full bg-[#0957CB] py-[77px] relative z-[50]">
        <div className="max-w-[1366px] mx-auto">
          <div className="pl-[175px] flex gap-5 items-center">
            {data[2]?.title && <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[40px] font-bold tracking-[0.4px]`}
            >
              {data[2]?.title}
            </h2>}
            {data[2]?.description && <div className="w-full max-w-[745px] text-[#FEFEFE] !text-[20px] leading-[26px] mt-[-24px]">
              <ReactPortableText content={data[2]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>
      </div>
      {/* section3 */}
      <div ref={section3} className="max-w-[1366px] mx-auto relative z-10 h-[656px]">
        <div className="absolute top-[50px] left-[175px]">
          <div className="w-full max-w-[600px] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {data[3]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}
              >
                {data[3]?.title}
              </h2>}

              {data[3]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[495px] mt-[-24px]`}>
                <ReactPortableText content={data[3]?.description} />
              </div>}
            </div>
            {data[3]?.imagesList[0]?.desktopImage && <div className="w-full">
              <Image
                className="w-full"
                src={urlForImage(data[3]?.imagesList[0]?.desktopImage).url()}
                alt={data[3]?.imagesList[0]?.desktopImage?.alt ?? ""}
                width={766}
                height={454}
              />
            </div>}
          </div>
        </div>
        <motion.div
          // style={{ y: section3Small }}
          className="absolute top-[400px] right-[135px] w-full max-w-[196px] flex-col gap-2 parallax-element text-right"
        >
          {data[4]?.title && <h2 className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}>
            {data[4]?.title}
          </h2>}
          {data[4]?.description && <div className={`mt-[-24px] w-full max-w-[600px]`}>
            <ReactPortableText content={data[4]?.description} />
          </div>}
        </motion.div>
        {data[4]?.imagesList[0]?.desktopImage && <motion.div
          style={{ y: section3Small }}
          className="absolute top-[350px] right-[247px] z-50 w-full h-full max-w-[480px] max-h-[453px] parallax-element"
        >
          <Image
            className="w-full h-full"
            src={urlForImage(data[4]?.imagesList[0]?.desktopImage).url()}
            alt={data[4]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={480}
            height={453}
          />
        </motion.div>}
        <div className="absolute top-[-80px] left-[312px] z-[-1] w-full h-full max-w-[743px] max-h-[595px]">
          <p className={`${style.montserrat} text-[#F7F9FE] text-[262px] font-bold leading-normal`}>
            100,000
          </p>
        </div>
      </div>
      {/* section4 */}
      <div className="w-full h-full max-h-[450px] relative z-40 flex">
        {data[5]?.imagesList[0]?.desktopImage && <div className="w-full max-h-[450px] absolute inset-0 pageBanner_bg_gradient">
          <Image
            src={urlForImage(data[5]?.imagesList[0]?.desktopImage).url()}
            alt={data[5]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={1366}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>}
        <div className="w-full max-w-[1366px] h-full mx-auto z-[50] flex items-center pl-[72px]">
          <div className="flex flex-col gap-2">
            {data[5]?.title && <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[26px] font-bold leading-[32px]`}
            >
              {data[5]?.title}
            </h2>}
            {data[5]?.caption && <p
              className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px]`}
            >
              {data[5]?.caption}
            </p>}
            {data[5]?.description && <div className={`mt-[-24px] w-full max-w-[424px]`}>
              <ReactPortableText content={data[5]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>
      </div>
      {/* section5 */}
      <div ref={section5} className="h-[1274px] relative ">
        <div className="w-full max-w-[1366px] mx-auto relative h-full">
          <div className="w-full max-w-[1037px] absolute top-[45px] left-[175px] flex items-center gap-[29px]">
            <motion.div style={{ y: section5Medium }} className="flex flex-col gap-2 max-w-[308px]">
              {data[6]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px] text-right`}
              >
                {data[6]?.title}
              </h2>}
              {data[6]?.caption && <p
                className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] text-right`}
              >
                {data[6]?.caption}
              </p>}
              {data[6]?.description && <div className={`mt-[-24px] w-full max-w-[600px] text-right`}>
                <ReactPortableText content={data[6]?.description} />
              </div>}
            </motion.div>
            {data[6]?.imagesList[0]?.desktopImage && <div className="w-full max-w-[700] relative">
              <Image
                className="w-full"
                src={urlForImage(data[6]?.imagesList[0]?.desktopImage).url()}
                alt={data[6]?.imagesList[0]?.desktopImage?.alt ?? ""}
                width={700}
                height={500}
              />
            </div>}
          </div>
          {data[7]?.imagesList[0]?.desktopImage && <motion.div
            // style={{ y: section5Medium }}
            className="w-full max-w-[361px] absolute top-[600px] left-[109px]"
          >
            <Image
              className="w-full"
              src={urlForImage(data[7]?.imagesList[0]?.desktopImage).url()}
              alt={data[7]?.imagesList[0]?.desktopImage?.alt ?? ""}
              width={700}
              height={500}

            />
          </motion.div>}
          <motion.div
            style={{ y: section5Small }}
            className="flex flex-col gap-2 max-w-[228px] absolute top-[727px] left-[290px]"
          >
            {data[7]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px] `}
            >
              {data[7]?.title}
            </h2>}
            {data[7]?.caption && <p
              className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] `}
            >
              {data[7]?.caption}
            </p>}
            {data[7]?.description && <div className={`mt-[-24px] w-full max-w-[600px] `}>
              <ReactPortableText content={data[7]?.description} />
            </div>}
          </motion.div>
          {data[8]?.imagesList[0]?.desktopImage && <motion.div
            style={{ y: section5Medium, }}
            className="w-full max-w-[392px] absolute top-[730px] right-[383px] z-[50]"
          >
            <Image
              className="w-full"
              src={urlForImage(data[8]?.imagesList[0]?.desktopImage).url()}
              alt={data[8]?.imagesList[0]?.desktopImage?.alt ?? ""}
              width={700}
              height={500}

            />
          </motion.div>}
          {data[8]?.imagesList[1]?.desktopImage && <div className="w-full max-w-[394px] absolute top-[594px] right-[72px] z-[40]">
            <Image
              className="w-full"
              src={urlForImage(data[8]?.imagesList[1]?.desktopImage).url()}
              alt={data[8]?.imagesList[1]?.desktopImage?.alt ?? ""}
              width={700}
              height={500}
            />
          </div>}
          <motion.div
            style={{ y: section5Medium }}
            className="flex flex-col gap-2 max-w-[507px] absolute top-[989px] right-[72px]"
          >
            {data[8]?.title && <h2
              className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px] text-right `}
            >
              {data[8]?.title}
            </h2>}
            {data[8]?.description && <div className={`mt-[-24px] w-full max-w-[600px] text-right`}>
              <ReactPortableText content={data[8]?.description} />
            </div>}

          </motion.div>
          {data[7]?.imagesList[1]?.desktopImage && <div className="w-full max-w-[361px] absolute bottom-0 left-[0]">
            <Image
              className="w-full"
              src={urlForImage(data[7]?.imagesList[1]?.desktopImage).url()}
              alt={data[7]?.imagesList[1]?.desktopImage?.alt ?? ""}
              width={700}
              height={500}
            />
          </div>}
        </div>

      </div>
      {/* section6 */}
      <div ref={section6} className="w-full h-full max-h-[586px] relative flex">
        {data[9]?.imagesList[0]?.desktopImage && <div className="w-full max-h-[586px] absolute inset-0 milestone_bg_gradient">
          <Image
            src={urlForImage(data[9]?.imagesList[0]?.desktopImage).url()}
            alt={data[9]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={1366}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>}
        <motion.div className="w-full max-w-[1366px] mx-auto relative">
          <div className="w-full max-w-[446px] h-full z-[50] absolute top-[66px] right-[114px]">
            <div className="flex flex-col items-end gap-2">
              {data[9]?.title && <h2
                className={`${style.montserrat} text-[#FEFEFE] text-[26px] font-bold leading-[32px] text-right`}
              >
                {data[9]?.title}
              </h2>}
              {data[9]?.caption && <p
                className={`${style.montserrat} text-[#FEFEFE] text-[18px] font-semibold leading-[22px] text-right`}
              >
                {data[9]?.caption}
              </p>}
              {data[9]?.description && <div className={`mt-[-24px] w-full max-w-[336px] text-right`}>
                <ReactPortableText content={data[9]?.description} theme={"dark"} />
              </div>}
            </div>
          </div>
        </motion.div>
      </div>
      {/* section7 */}
      <div ref={section7} className="max-w-[1366px] mx-auto relative z-10 h-[848px]">
        <div className="absolute top-[50px] left-[73px]">
          <div className="w-full max-w-[233px] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {data[10]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}
              >
                {data[10]?.title}
              </h2>}

              {data[10]?.description && <div className={`text-[#6E6E6E] mt-[-24px] text-[16px] w-full max-w-[233px] text-justify`}>
                <ReactPortableText content={data[10]?.description} />
              </div>}
            </div>
          </div>
        </div>
        <motion.div
          style={{ y: section7Small }}
          className="absolute top-[400px] right-[190px] w-full max-w-[237px] flex flex-col gap-2"
        >
          <h2 className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}>
            {data[11]?.title}
          </h2>
          {data[11]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[600px] text-justify mt-[-24px]`}>
            <ReactPortableText content={data[11]?.description} />
          </div>}
        </motion.div>
        {data[10]?.imagesList[0]?.desktopImage && <motion.div
          style={{ y: section7Medium }}
          className="absolute top-[50px] left-[267px] z-50 w-full h-full max-w-[557px] max-h-[616px]"
        >
          <Image
            className="w-full h-full"
            src={urlForImage(data[10]?.imagesList[0]?.desktopImage).url()}
            alt={data[10]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={557}
            height={616}
          />
        </motion.div>}
        {data[11]?.imagesList[0]?.desktopImage && <motion.div
          // style={{ y: section1Small }}
          className="absolute bottom-0 left-[329px] z-50 w-full max-w-[711px]"
        >
          <Image
            className="w-full"
            src={urlForImage(data[11]?.imagesList[0]?.desktopImage).url()}
            alt={data[11]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={743}
            height={595}
          />
        </motion.div>}
        <div className="absolute top-[-80px] right-[-35px] z-[-1] w-full h-full max-w-[743px] max-h-[595px]">
          <p className={`${style.montserrat} text-[#F7F9FE] text-[262px] font-bold leading-normal`}>
            2019
          </p>
        </div>
      </div>
      {/* section8 */}
      <div className="w-full h-full max-h-[586px] relative flex z-10">
        {data[12]?.imagesList[0]?.desktopImage && <div className="w-full max-h-[586px] absolute inset-0 milestone_bg_gradient">
          <Image
            src={urlForImage(data[12]?.imagesList[0]?.desktopImage).url()}
            alt={data[12]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={1366}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>}
        <div className="w-full max-w-[1366px] mx-auto relative">
          <div className="w-full max-w-[492px] h-full z-[100] absolute top-[44px] left-[85px]">
            <div className="flex flex-col gap-2">
              {data[12]?.title && <h2
                className={`${style.montserrat} text-[#3C3C3C] text-[26px] font-bold leading-[32px] `}
              >
                {data[12]?.title}
              </h2>}
              {data[12]?.description && <div className={`text-[#3C3C3C] text-[16px] w-full max-w-[492px] mt-[-24px]`}>
                <ReactPortableText content={data[12]?.description} />
              </div>}
            </div>
          </div>
        </div>
      </div>
      {/* section9 */}
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
      {/* section10 */}
      <div ref={section10} className="w-full h-full max-h-[586px] relative flex">
        {data[14]?.imagesList[0]?.desktopImage && <div className="w-full max-h-[586px] absolute inset-0 milestone_bg_gradient">
          <Image
            src={urlForImage(data[14]?.imagesList[0]?.desktopImage).url()}
            alt={data[14]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={1366}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>}
        <motion.div
          // style={{ y: section10Large }}
          className="w-full max-w-[1366px] mx-auto relative"
        >
          <div className="w-full max-w-[446px] h-full z-[50] absolute top-[66px] right-[114px]">
            <div className="flex flex-col items-end gap-2">
              {data[14]?.title && <h2
                className={`${style.montserrat} text-[#FEFEFE] text-[26px] font-bold leading-[32px] text-right`}
              >
                {data[14]?.title}
              </h2>}

              {data[14]?.description && <div className={`text-[#FEFEFE] text-[16px] w-full max-w-[492px] text-right mt-[-24px]`}>
                <ReactPortableText content={data[14]?.description} theme={"dark"} />
              </div>}
            </div>
          </div>
        </motion.div>
      </div>
      {/* section11 */}
      <div ref={section11} className="max-w-[1366px] mx-auto relative z-10 h-[1774px]">
        <div className="absolute top-[50px] left-[633px]">
          <div className="w-full max-w-[600px] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {data[15]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}
              >
                {data[15]?.title}
              </h2>}

              {data[15]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[294px] mt-[-24px]`}>
                <ReactPortableText content={data[15]?.description} />
              </div>}
            </div>
          </div>
        </div>
        <motion.div
          style={{ y: section11Large }}
          className="absolute top-[330px] right-[171px] w-full max-w-[273px] flex flex-col gap-2"
        >
          {data[16]?.title && <h2
            className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px] text-right`}
          >
            {data[16]?.title}
          </h2>}
          {data[16]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[273px] text-right mt-[-24px]`}>
            <ReactPortableText content={data[16]?.description} />
          </div>}
        </motion.div>
        {data[15]?.imagesList[0]?.desktopImage && <motion.div
          // style={{ y: section11Small }}
          className="absolute top-[45px] left-[149px] z-50 w-full h-full max-w-[778px] max-h-[469px]"
        >
          <Image
            className="w-full h-full"
            src={urlForImage(data[15]?.imagesList[0]?.desktopImage).url()}
            alt={data[15]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={778}
            height={469}
          />
        </motion.div>}
        {data[16]?.imagesList[0]?.desktopImage && <motion.div
          style={{ y: section11Large }}
          className="absolute top-[508px] right-[171px] z-50 w-full h-full max-w-[517px] max-h-[300px]"
        >
          <Image
            className="w-full h-full"
            src={urlForImage(data[16]?.imagesList[0]?.desktopImage).url()}
            alt={data[16]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={517}
            height={300}
          />
        </motion.div>}
        <motion.div
          style={{ y: section11Medium }}
          className="absolute top-[748px] left-[176px] w-full max-w-[387px] flex flex-col gap-2"
        >
          {data[17]?.title && <h2 className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}>
            {data[17]?.title}
          </h2>}
          {data[17]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[387px] mt-[-24px]`}>
            <ReactPortableText content={data[17]?.description} />
          </div>}
        </motion.div>
        {data[17]?.imagesList[0]?.desktopImage && <motion.div
          style={{ y: section11Medium }}
          className="absolute top-[983px] left-[175px] z-50 w-full h-full max-w-[277px] max-h-[44px]"
        >
          <Image
            className="w-full h-full"
            src={urlForImage(data[17]?.imagesList[0]?.desktopImage).url()}
            alt={data[17]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={277}
            height={44}
          />
        </motion.div>}
        <motion.div
          style={{ y: section11Large }}
          className="absolute top-[899px] right-[176px] w-full max-w-[432px] flex flex-col gap-2"
        >
          {data[18]?.title && <h2
            className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px] text-right`}
          >
            {data[18]?.title}
          </h2>}
          {data[18]?.caption && <p
            className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px] text-right`}
          >
            {data[18]?.caption}
          </p>}
          {data[18]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[432px] text-right mt-[-24px]`}>
            <ReactPortableText content={data[18]?.description} />
          </div>}
        </motion.div>
        {data[18]?.imagesList[0]?.desktopImage && <motion.div
          style={{ y: section11Large }}
          className="absolute top-[1109px] right-[175px] z-50 w-full h-full max-w-[496px] max-h-[300px]"
        >
          <Image
            className="w-full h-full"
            src={urlForImage(data[18]?.imagesList[0]?.desktopImage).url()}
            alt={data[18]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={496}
            height={300}
          />
        </motion.div>}
        <div className="absolute top-[-50px] right-[101px] z-[-1] w-full h-full max-w-[520px] max-h-[250px]">
          <p className={`${style.montserrat} text-[#F7F9FE] text-[205px] font-bold leading-normal`}>
            2020
          </p>
        </div>
        <div className="absolute top-[970px] left-[10px] z-[-1] w-full h-full max-w-[663px] max-h-[330px]">
          <p className={`${style.montserrat} text-[#F7F9FE] text-[271px] font-bold leading-normal`}>
            2023
          </p>
        </div>

        {data[19]?.imagesList[0]?.desktopImage && <div className="absolute top-[1232px] left-[175px] z-50 w-full h-full max-w-[496px] max-h-[300px]">
          <Image
            className="w-full h-full"
            src={urlForImage(data[19]?.imagesList[0]?.desktopImage).url()}
            alt={data[19]?.imagesList[0]?.desktopImage?.alt ?? ""}
            width={496}
            height={300}
          />
        </div>}
        <div className="absolute top-[1556px] left-[176px] w-full max-w-[370px] flex flex-col gap-2">
          {data[19]?.title && <h2 className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}>
            {data[19]?.title}
          </h2>}
          {data[19]?.caption && <p
            className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}
          >
            {data[19]?.caption}
          </p>}
          {data[19]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[370px] mt-[-24px]`}>
            <ReactPortableText content={data[19]?.description} />
          </div>}
        </div>
      </div>
      {/* section12 */}
      <div className="w-full bg-[#009349] py-[77px] relative z-[50]">
        <div className="max-w-[1366px] mx-auto">
          <div className="pl-[175px] flex gap-5 items-center">
            {data[20]?.title && <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[40px] font-bold tracking-[0.4px]`}
            >
              {data[20]?.title}
            </h2>}
            {data[20]?.description && <div className="w-full max-w-[773px] text-[#FEFEFE]  leading-[26px] mt-[-24px]">
              <ReactPortableText content={data[20]?.description} theme={"dark"} />
            </div>}
          </div>
        </div>
      </div>
      {/* section13 */}
      <div ref={section13} className="max-w-[1366px] mx-auto h-[573px] flex items-center">
        <div className="w-full max-w-[1024px] mx-auto flex gap-[16px]">
          {data[21]?.imagesList[0]?.desktopImage && <div className="w-full max-w-[704px] max-h-[413px]">
            <Image
              className="w-full h-full"
              src={urlForImage(data[21]?.imagesList[0]?.desktopImage).url()}
              alt={data[21]?.imagesList[0]?.desktopImage?.alt ?? ""}
              width={704}
              height={413}

            />
          </div>}
          <div className='flex items-end'>
            <motion.div style={{ y: section13Medium }} className="flex flex-col gap-2">
              {data[21]?.title && <h2
                className={`${style.montserrat} text-[#0957CB] text-[26px] font-bold leading-[32px]`}
              >
                {data[21]?.title}
              </h2>}
              {data[21]?.caption && <p
                className={`${style.montserrat} text-[#3C3C3C] text-[18px] font-semibold leading-[22px]`}
              >
                {data[21]?.caption}
              </p>}
              {data[21]?.description && <div className={`text-[#6E6E6E] text-[16px] w-full max-w-[600px] mt-[-24px]`}>
                <ReactPortableText content={data[21]?.description} />
              </div>}
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  )
}
