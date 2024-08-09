import { useState } from 'react'
import OverView from '../widgets/blocks/overView'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

const RapidRelief = ({ title, description, tabs, classNameValues }: any) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].tabName)
    const [data, setData] = useState(tabs[0])

    const handleTab = (option: any) => {
        setSelectedTab(option)
        if (option === tabs[0].tabName) setData(tabs[0])
        if (option === tabs[1].tabName) setData(tabs[1])
    }
    return (
        <section className="py-12 md:py-20 bg-[#FEFEFE] flex flex-col gap-6 md:gap-8">
            {/* overview */}
            <OverView title={title} description={description} theme="light" contentWidth="container" />
            <div className="md:container md:mx-auto px-6 md:px-[71px] flex justify-center md:flex-wrap gap-3 overflow-scroll slider-body mb-4 md:mb-0">
                {tabs.slice(0, 2).map(({ tabName, image, _key }: any) => (
                    <p
                        onClick={() => handleTab(tabName)}
                        key={_key}
                        className={` ${selectedTab == tabName
                                ? 'bg-[#0084C6] text-off-white'
                                : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
                            } font-semibold rounded-full cursor-pointer px-6 py-2 whitespace-nowrap transition-all duration-150`}
                    >
                        {tabName}
                    </p>
                ))}
            </div>
            {data && (
                <div className="px-6 md:px-[71px]">
                    <div className="max-w-[1014px] mx-auto flex flex-col md:flex-row md:items-center gap-6">
                        {/* Image */}
                        <div className="w-full  md:w-1/2 flex md:justify-end ">
                            <Image
                                className="w-full md:w-[392px] aspect-[6/5] rounded-xl"
                                src={urlForImage(data?.image).url()}
                                alt={data?.image?.alt ?? ''}
                                loading="lazy"
                                width={392}
                                height={326.66669}
                            />
                        </div>
                        {/* content */}
                        <div className="w-full md:w-1/2 md:pl-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#3C3C3C] text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px] font-montserrat">
                                    {data?.tabTitle}
                                </h3>
                                <p className="text-grey-9 text-base font-normal leading-6">
                                    {data?.tabDescription}
                                </p>
                            </div>
                            <ul
                                className={`pl-6 text-grey-9 text-base font-normal leading-6 list-disc ${data?.tabDescription !== undefined ? 'pt-4' : ''
                                    }`}
                            >
                                {data?.points &&
                                    data?.points?.map((point: any, index: any) => (
                                        <li key={index}>{point?.pointTitle}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default RapidRelief
