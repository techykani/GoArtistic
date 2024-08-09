import { HubspotForm } from '@/components/hubspot/HubspotForm'
import EyeBrow from '@/components/widgets/shared/eyeBrew'
import compareArrays from '@/lib/compareArrays'
import compareLabArrays from '@/lib/compareLabArrays'
import { useWindowSize } from '@/lib/hooks'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export const Comparison = ({
  dataToCompare,
  setShowComparisonModal,
  setSelectedIds,
  setCategory,
}: any) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [showPopup, setShowPopup] = useState(false)
  const [showForm, setForm] = useState('289bc274-82f1-41f0-b564-b8c08dcd5fe6')
  const [consult, setConsult] = useState<any>()
  const [clinic, setClinic] = useState<any>()
  const [laboratory, setLaboratory] = useState<any>()
  const [radiology, setRadiology] = useState<any>()
  const [other, setOther] = useState<any>()
  const [addon, setAddon] = useState<any>()
  console.log(dataToCompare, 'd')

  useEffect(() => {
    // const consultArr = compareLabArrays(
    //   dataToCompare[0]?.test?.consultTest,
    //   dataToCompare[1]?.test?.consultTest,
    // );
    // setConsult(consultArr);
    // const clinicArr = compareArrays(dataToCompare[0]?.test?.clinic, dataToCompare[1]?.test?.clinic);
    // setClinic(clinicArr);
    // const laboratoryArr = compareLabArrays(
    //   dataToCompare[0]?.test?.laboratoryTest,
    //   dataToCompare[1]?.test?.laboratoryTest,
    // )
    // setLaboratory(laboratoryArr)
    // const radiologyArr = compareArrays(
    //   dataToCompare[0]?.test?.radiology,
    //   dataToCompare[1]?.test?.radiology,
    // )
    // setRadiology(radiologyArr)
    // const otherArr = compareArrays(dataToCompare[0]?.test?.other, dataToCompare[1]?.test?.other);
    // setOther(otherArr)
    // const addonArr = compareArrays(
    //   dataToCompare[0]?.test?.addons?.addon,
    //   dataToCompare[1]?.test?.addons?.addon,
    // )
    // setAddon(addonArr)

    const consultArr = compareLabArrays(
      dataToCompare[0]?.test?.consultTest,
      dataToCompare[1]?.test?.consultTest,
      dataToCompare[2]?.test?.consultTest,
      dataToCompare[3]?.test?.consultTest,
    )
    setConsult(consultArr)
    const clinicArr = compareArrays(
      dataToCompare[0]?.test?.clinic,
      dataToCompare[1]?.test?.clinic,
      dataToCompare[2]?.test?.clinic,
      dataToCompare[2]?.test?.clinic,
    )
    setClinic(clinicArr)
    const laboratoryArr = compareLabArrays(
      dataToCompare[0]?.test?.laboratoryTest,
      dataToCompare[1]?.test?.laboratoryTest,
      dataToCompare[2]?.test?.laboratoryTest,
      dataToCompare[3]?.test?.laboratoryTest,
    )
    setLaboratory(laboratoryArr)
    const radiologyArr = compareArrays(
      dataToCompare[0]?.test?.radiology,
      dataToCompare[1]?.test?.radiology,
      dataToCompare[2]?.test?.radiology,
      dataToCompare[3]?.test?.radiology,
    )
    setRadiology(radiologyArr)
    const otherArr = compareArrays(
      dataToCompare[0]?.test?.other,
      dataToCompare[1]?.test?.other,
      dataToCompare[2]?.test?.other,
      dataToCompare[3]?.test?.other,
    )
    setOther(otherArr)
    const addonArr = compareArrays(
      dataToCompare[0]?.test?.addons?.addon,
      dataToCompare[1]?.test?.addons?.addon,
      dataToCompare[2]?.test?.addons?.addon,
      dataToCompare[3]?.test?.addons?.addon,
    )
    setAddon(addonArr)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggle = (state: boolean) => {
    setShowComparisonModal(state)
    setSelectedIds([])
    setCategory('')
  }
  const windowWidth = useWindowSize()?.width ?? 0

  const handlePrint = () => {
    window.print()
  }

  return (
    <div>
      <div className="fixed h-screen inset-0 z-[1000] bg-off-white px-6 md:px-[71px] pt-4 pb-12 md:py-[71px] overflow-scroll">
        {showPopup && (
          <div className="fixed h-screen inset-0 z-[1000] bg-off-white px-6 md:px-[71px] pt-4 pb-12 md:py-[71px] overflow-scroll">
            <section className="max-w-[1014px] mx-auto">
              {/* header */}
              <div className="w-full flex justify-end gap-[10px] items-center pb-12 md:pb-12">
                <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">Close</p>
                <div className="w-8 md:w-6 h-8 md:h-6 cursor-pointer">
                  {windowWidth < 768 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      onClick={() => handleToggle(false)}
                      className="cursor-pointer"
                    >
                      <g clip-path="url(#clip0_1_136259)">
                        <mask
                          id="mask0_1_136259"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                        >
                          <rect width="32" height="32" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1_136259)">
                          <path
                            d="M16.0001 17.8658L9.46673 24.3991C9.22229 24.6435 8.91118 24.7658 8.5334 24.7658C8.15562 24.7658 7.84451 24.6435 7.60007 24.3991C7.35562 24.1546 7.2334 23.8435 7.2334 23.4658C7.2334 23.088 7.35562 22.7769 7.60007 22.5324L14.1334 15.9991L7.60007 9.46576C7.35562 9.22131 7.2334 8.9102 7.2334 8.53242C7.2334 8.15464 7.35562 7.84353 7.60007 7.59909C7.84451 7.35464 8.15562 7.23242 8.5334 7.23242C8.91118 7.23242 9.22229 7.35464 9.46673 7.59909L16.0001 14.1324L22.5334 7.59909C22.7778 7.35464 23.089 7.23242 23.4667 7.23242C23.8445 7.23242 24.1556 7.35464 24.4001 7.59909C24.6445 7.84353 24.7667 8.15464 24.7667 8.53242C24.7667 8.9102 24.6445 9.22131 24.4001 9.46576L17.8667 15.9991L24.4001 22.5324C24.6445 22.7769 24.7667 23.088 24.7667 23.4658C24.7667 23.8435 24.6445 24.1546 24.4001 24.3991C24.1556 24.6435 23.8445 24.7658 23.4667 24.7658C23.089 24.7658 22.7778 24.6435 22.5334 24.3991L16.0001 17.8658Z"
                            fill="#3C3C3C"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_136259">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      onClick={() => handleToggle(false)}
                    >
                      <g clip-path="url(#clip0_1174_28102)">
                        <mask
                          id="mask0_1174_28102"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1174_28102)">
                          <path
                            d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z"
                            fill="#3C3C3C"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1174_28102">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
              <HubspotForm formID={showForm} />
            </section>
          </div>
        )}
        <section className="max-w-[1014px] mx-auto">
          {/* header */}
          <div className="w-full flex justify-end gap-[10px] items-center pb-10 md:pb-12">
            <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">Close</p>
            <div className="w-8 md:w-6 h-8 md:h-6 cursor-pointer">
              {windowWidth < 768 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  onClick={() => handleToggle(false)}
                  className="cursor-pointer"
                >
                  <g clip-path="url(#clip0_1_136259)">
                    <mask
                      id="mask0_1_136259"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                    >
                      <rect width="32" height="32" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_136259)">
                      <path
                        d="M16.0001 17.8658L9.46673 24.3991C9.22229 24.6435 8.91118 24.7658 8.5334 24.7658C8.15562 24.7658 7.84451 24.6435 7.60007 24.3991C7.35562 24.1546 7.2334 23.8435 7.2334 23.4658C7.2334 23.088 7.35562 22.7769 7.60007 22.5324L14.1334 15.9991L7.60007 9.46576C7.35562 9.22131 7.2334 8.9102 7.2334 8.53242C7.2334 8.15464 7.35562 7.84353 7.60007 7.59909C7.84451 7.35464 8.15562 7.23242 8.5334 7.23242C8.91118 7.23242 9.22229 7.35464 9.46673 7.59909L16.0001 14.1324L22.5334 7.59909C22.7778 7.35464 23.089 7.23242 23.4667 7.23242C23.8445 7.23242 24.1556 7.35464 24.4001 7.59909C24.6445 7.84353 24.7667 8.15464 24.7667 8.53242C24.7667 8.9102 24.6445 9.22131 24.4001 9.46576L17.8667 15.9991L24.4001 22.5324C24.6445 22.7769 24.7667 23.088 24.7667 23.4658C24.7667 23.8435 24.6445 24.1546 24.4001 24.3991C24.1556 24.6435 23.8445 24.7658 23.4667 24.7658C23.089 24.7658 22.7778 24.6435 22.5334 24.3991L16.0001 17.8658Z"
                        fill="#3C3C3C"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_136259">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={() => handleToggle(false)}
                >
                  <g clip-path="url(#clip0_1174_28102)">
                    <mask
                      id="mask0_1174_28102"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1174_28102)">
                      <path
                        d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z"
                        fill="#3C3C3C"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1174_28102">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* title */}
            <div className="w-full border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
              <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                {dataToCompare?.map((pack: any) => (
                  <div key={pack?._id} className="w-full h-full flex flex-col justify-between">
                    <div className="py-3">
                      <div className="flex gap-2 md:items-center">
                        <h2 className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                          {pack?.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                {dataToCompare[0]?.link?.text && (
                  <div className="pt-6 pb-5 md:pb-0 border-[1px] border-t-[#E6E6E6] border-b-off-white border-x-off-white mt-auto mb-6">
                    <Link
                      href={`${dataToCompare[0]?.link?.href === 'undefined'
                        ? ''
                        : dataToCompare[0]?.link?.href
                        }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="md:max-w-[166px] max-w-[144px] px-6 py-3 gap-2 bg-grey-dark flex text-off-white text-[16px] btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center justify-center items-center">
                        {dataToCompare[0]?.link?.text}
                      </button>
                    </Link>
                  </div>
                )}

                {dataToCompare[1]?.link?.text && (
                  <div className="pt-6 pb-5 md:pb-0 border-[1px] border-t-[#E6E6E6] border-b-off-white border-x-off-white mt-auto mb-6">
                    <Link
                      href={`${dataToCompare[1]?.link?.href === 'undefined'
                        ? ''
                        : dataToCompare[1]?.link?.href
                        }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="md:max-w-[166px] max-w-[144px] px-6 py-3 gap-2 bg-grey-dark flex text-off-white text-[16px] btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center justify-center items-center">
                        {dataToCompare[1]?.link?.text}
                      </button>
                    </Link>
                  </div>
                )}
                {dataToCompare[2]?.link?.text && (
                  <div className="pt-6 pb-5 md:pb-0 border-[1px] border-t-[#E6E6E6] border-b-off-white border-x-off-white mt-auto mb-6">
                    <Link
                      href={`${dataToCompare[2]?.link?.href === 'undefined'
                        ? ''
                        : dataToCompare[2]?.link?.href
                        }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="md:max-w-[166px] max-w-[144px] px-6 py-3 gap-2 bg-grey-dark flex text-off-white text-[16px] btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center justify-center items-center">
                        {dataToCompare[2]?.link?.text}
                      </button>
                    </Link>
                  </div>
                )}
                {dataToCompare[3]?.link?.text && (
                  <div className="pt-6 pb-5 md:pb-0 border-[1px] border-t-[#E6E6E6] border-b-off-white border-x-off-white mt-auto mb-6">
                    <Link
                      href={`${dataToCompare[3]?.link?.href === 'undefined'
                        ? ''
                        : dataToCompare[3]?.link?.href
                        }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="md:max-w-[166px] max-w-[144px] px-6 py-3 gap-2 bg-grey-dark flex text-off-white text-[16px] btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center justify-center items-center">
                        {dataToCompare[3]?.link?.text}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* price */}
            <div className="w-full flex flex-col gap-2 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
              <EyeBrow title="price" theme="light" />
              <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                {dataToCompare?.map((pack: any) => (
                  <div key={pack?._id} className="w-full">
                    <p className="text-grey-dark text-[28px] font-semibold leading-[36px] tracking-[-0.28px]">
                      ${pack?.packageprice}
                    </p>
                    <p className="text-grey-dark text-[14px] leading-[20px]">Base price w/o GST</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TYPE */}
            <div className="w-full flex flex-col gap-2 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
              <EyeBrow title="TYPE" theme="light" />
              <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                {dataToCompare?.map((pack: any) => (
                  <div key={pack?._id} className="w-full">
                    <p className="text-grey-dark text-[16px] leading-[24px]">{pack?.category}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div className="w-full flex flex-col gap-2 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
              <EyeBrow title="LOCATION" theme="light" />
              <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                {dataToCompare?.map((pack: any) => (
                  <div key={pack?._id} className="w-full">
                    <p className="text-grey-dark text-[16px] leading-[24px]">
                      {pack?.packagelocation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Details */}

            <div className="flex flex-col gap-4 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
              <div className="grid grid-cols-1 gap-4">
                {/* Consult Test */}
                <div className="w-full flex flex-col gap-4 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
                  <EyeBrow title="Consult Test" theme="light" />

                  {consult?.map(({ title, labTest }: any, i: any) => (
                    <>
                      <h4 className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                        {title}
                      </h4>
                      <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[0]}
                            </p>
                          ))}
                        </div>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[1]}
                            </p>
                          ))}
                        </div>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[2]}
                            </p>
                          ))}
                        </div>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[3]}
                            </p>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                {/* Clinic Test */}
                <div className="w-full flex flex-col gap-4 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
                  <EyeBrow title="Clinic Test" theme="light" />
                  <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                    <div className="w-full">
                      {clinic?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[0]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {clinic?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[1]}
                        </p>
                      ))}
                    </div>
                    {dataToCompare.length > 2 && <div className="w-full">
                      {clinic?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[2]}
                        </p>
                      ))}
                    </div>}
                    {dataToCompare.length === 4 && <div className="w-full">
                      {clinic?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[3]}
                        </p>
                      ))}
                    </div>}
                  </div>
                </div>
                {/* Laboratory */}
                <div className="w-full flex flex-col gap-4 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
                  <EyeBrow title=" Laboratory Test" theme="light" />

                  {laboratory?.map(({ title, labTest }: any, i: any) => (
                    <>
                      <h4 className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                        {title}
                      </h4>
                      <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[0]}
                            </p>
                          ))}
                        </div>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[1]}
                            </p>
                          ))}
                        </div>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[2]}
                            </p>
                          ))}
                        </div>
                        <div className="w-full">
                          {labTest?.map(({ title }: any, i: any) => (
                            <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                              {title[3]}
                            </p>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                {/* Radiology */}
                <div className="w-full flex flex-col gap-4 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
                  <EyeBrow title=" Radiology Test" theme="light" />
                  <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                    <div className="w-full">
                      {radiology?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[0]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {radiology?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[1]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {radiology?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[2]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {radiology?.map(({ title }: any, i: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={i}>
                          {title[3]}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Other */}
                <div className="w-full flex flex-col gap-2 ">
                  <EyeBrow title="Others" theme="light" />
                  <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                    <div className="w-full">
                      {other?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[0]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {other?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[1]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {other?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[2]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {other?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[3]}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Add ons */}
            <div className="flex flex-col gap-4 pb-4 border-[2px] border-b-[#004E89] border-t-off-white border-x-off-white">
              <EyeBrow title=" Additional add ons" theme="light" />
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full flex flex-col gap-2">
                  <div className={`grid grid-cols-${dataToCompare.length} gap-6`}>
                    <div className="w-full">
                      {addon?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[0]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {addon?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[1]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {addon?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[2]}
                        </p>
                      ))}
                    </div>
                    <div className="w-full">
                      {addon?.map(({ _id, title }: any) => (
                        <p className="text-grey-dark text-[14px] leading-[20px]" key={_id}>
                          {title[3]}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full pt-6 md:pt-12 flex justify-center">
            <button
              className="btn_primary_medium-light font-semibold rounded-full leading-[20px] text-centerwhitespace-nowrap"
              onClick={handlePrint}
            >
              Save comparison (PDF)
            </button>
          </div> */}
        </section>
      </div>
    </div>
  )
}
