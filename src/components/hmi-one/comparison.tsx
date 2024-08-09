import { urlForImage } from '@/studio/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/Home.module.css'

export const PlanComparison = ({ membershipPlans }: any) => {

  const handleDownload = (link: any) => {
    fetch(link).then(response => response.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.setAttribute('download', 'member-rates.pdf'); // Specify the desired filename
      document.body.appendChild(link); link.click(); link.remove();
    }).catch(error => console.error('Error downloading the PDF:', error));
  };

  return (
    <div className="px-6 md:px-[71px]">
      <div className="w-full flex max-w-[1016px] mx-auto">
        <table className="w-full" cellPadding={0} cellSpacing={0}>
          {/* plan name */}
          <tr className="">
            {membershipPlans?.map((plans: any) => (
              <td
                key={plans?._key}
                className="first:rounded-tl-lg last:rounded-tr-lg overflow-hidden"
              >
                <div
                  className={`w-full px-[36px] py-[32px] ${plans.planName == 'Silver' ? 'hmiOne_table_silver' : 'hmiOne_table_gold'
                    }  flex flex-col gap-5 ${plans?.planName === 'Silver' ? 'text-[#3C3C3C]' : 'text-[#FEFEFE]'
                    }`}
                >
                  <p className={` text-[28px] font-semibold leading-[36px] tracking-[-0.28px]`}>
                    {plans?.planName}
                  </p>
                  <div className="w-full flex gap-[35px]">
                    {/* <div className="flex flex-col gap-[4px]">
                      <p className=" text-[14px] leading-[160%]">
                        {membershipPlans[0]?.price?.usualPrice?.title}
                      </p>
                      <p className=" text-[28px] font-semibold leading-[36px] tracking-[-0.28px] line-through">
                        {membershipPlans[0]?.price?.usualPrice?.priceValue}
                      </p>
                    </div> */}
                    <div className="flex flex-col gap-[4px]">
                      <p className=" text-[14px] leading-[160%]">
                        {plans?.price?.limitedTimePrice?.title}
                      </p>
                      <p className=" text-[28px] font-semibold leading-[36px] tracking-[-0.28px]">
                        {plans?.price?.limitedTimePrice?.priceValue}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            ))}
          </tr>
          {/* benefit-1 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[0]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[0]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[0]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[0]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[0]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[0]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[0]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[0]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[0]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[0]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[0]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[0]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <div
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                              >
                                {
                                  membershipPlans[0]?.benefits[0]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </div>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={membershipPlans[0]?.benefits[0]?._key}
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[0]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[0]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[0]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[0]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[0]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[0]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[0]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[0]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[0]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[0]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[0]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                              >
                                {
                                  membershipPlans[1]?.benefits[0]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-2 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[1]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[1]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[1]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[1]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[1]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[1]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[1]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[1]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[1]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[1]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[1]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[1]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                              >
                                {
                                  membershipPlans[0]?.benefits[1]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[1]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[1]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[1]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[1]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[1]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[1]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[1]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[1]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[1]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[1]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[1]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[1]?.benefits[1]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-3 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[2]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[2]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[2]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[2]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[2]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[2]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[2]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[2]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[2]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[2]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[2]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[2]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[0]?.benefits[2]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[2]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[2]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[2]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[2]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[2]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[2]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[2]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[2]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[2]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[2]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[2]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[1]?.benefits[2]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-4 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[3]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[3]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[3]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[3]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[3]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[3]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[3]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[3]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[3]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[3]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[3]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[3]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[0]?.benefits[3]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[3]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[3]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[3]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[3]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[3]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[3]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[3]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[3]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[3]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[3]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[3]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                              >
                                {
                                  membershipPlans[1]?.benefits[3]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-5  */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[4]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[4]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[4]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[4]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[4]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[4]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[4]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[4]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[4]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[4]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[4]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[4]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[0]?.benefits[4]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[4]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[4]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[4]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[4]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[4]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[4]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[4]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[4]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[4]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[4]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[4]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[1]?.benefits[4]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-6 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[5]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[5]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[5]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[5]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[5]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[5]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[5]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[5]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[5]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[5]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[5]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[5]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[0]?.benefits[5]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[5]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[5]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[5]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[5]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[5]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[5]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[5]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[5]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[5]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[5]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[5]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                              >
                                {
                                  membershipPlans[1]?.benefits[5]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-7 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[6]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[6]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[6]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[6]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[6]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[6]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[6]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[6]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[6]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[6]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[6]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[6]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[0]?.benefits[6]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[6]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[6]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[6]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[6]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[6]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[6]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[6]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[6]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[6]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[6]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[6]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[1]?.benefits[6]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* benefit-8 */}
          <tr>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[0]?.benefits[7]?.benefit?.subtitle ? (
                <div
                  key={membershipPlans[0]?.benefits[7]?._key}
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[0]?.benefits[7]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[0]?.benefits[7]?.icon).url()}
                          alt={membershipPlans[0]?.benefits[7]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[0]?.benefits[7]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[0]?.benefits[7]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[0]?.benefits[7]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[7]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[0]?.benefits[7]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[0]?.benefits[7]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[0]?.benefits[7]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <Link
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                                href={''}
                              >
                                {
                                  membershipPlans[0]?.benefits[7]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </Link>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
            <td className='border border-b-[#E6E6E6]'>
              {membershipPlans[1]?.benefits[6]?.benefit?.subtitle ? (
                <div
                  className="p-6 flex justify-center   last:rounded-bl-lg"
                >
                  <div className="flex items-center gap-4 justify-center max-w-[335px]">
                    {membershipPlans[1]?.benefits[6]?.icon && (
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          className=""
                          src={urlForImage(membershipPlans[1]?.benefits[7]?.icon).url()}
                          alt={membershipPlans[1]?.benefits[7]?.icon?.alt ?? ''}
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    {membershipPlans[1]?.benefits[7]?.benefit?.subtitle && (
                      <div className="w-full lg:max-w-[271px] md2:min-w-[271px] max-w-full">
                        {membershipPlans[1]?.benefits[7]?.benefit?.subtitle && (
                          <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                            {membershipPlans[1]?.benefits[7]?.benefit?.subtitle}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[7]?.benefit?.description && (
                          <p className="text-[#373E46] text-[14px] leading-[140%]">
                            {membershipPlans[1]?.benefits[7]?.benefit?.description}
                          </p>
                        )}
                        {membershipPlans[1]?.benefits[7]?.benefit?.downloadableContents?.pdfFile && (
                          <div className="flex">
                            <button onClick={() => handleDownload(membershipPlans[1]?.benefits[7]?.benefit?.downloadableContents?.pdfFile)} className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded">
                              <div className="w-[11.375px] h-[11.375px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                    fill="#0957CB"
                                  />
                                  <path
                                    d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                    fill="#0957CB"
                                  />
                                </svg>
                              </div>
                              <p
                                className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}

                              >
                                {
                                  membershipPlans[1]?.benefits[7]?.benefit?.downloadableContents
                                    ?.text
                                }
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="p-6 flex justify-center last:rounded-bl-lg"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
