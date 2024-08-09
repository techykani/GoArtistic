import { HubspotForm } from '@/components/hubspot/HubspotForm'
import { useWindowSize } from '@/lib/hooks'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { useState } from 'react'
import clsx from 'clsx'
import { HubspotPGForm } from '../hubspot/HubspotPGForm'

const gender = ['Yes', 'No']
const MakeAnEnquirySec = ({
  title,
  enquiries,
  description,
  formTitle,
  formDescription,
  formId,
  formIdNo,
  formIdYes,
  notification,
}: any) => {
  const [showForm, setShowForm] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string>('')
  const [selectedItems2, setSelectedItems2] = useState<string>('')
  const [selectedItems3, setSelectedItems3] = useState<string>('')
  const windowWidth = useWindowSize()?.width ?? 0
  const [dataFromHubspot, setDataFromHubspot] = useState(false)

  const handleDataFromChild = (data: any) => {
    setShowForm(false)
    setDataFromHubspot(data)
  }
  const handlecheckbox = (eve: any) => {
    setShowForm(true)
    setSelectedItems(eve)
  }
  const handlecheckbox2 = (eve: any) => {
    setSelectedItems2(eve)
  }
  const handlecheckbox3 = (eve: any) => {
    setSelectedItems3(eve)
  }
  const renderExpat = () => {
    return (
      <>
        {(showForm || !dataFromHubspot) && (
          <>
            <label className={clsx('text-[14px] font-normal text-[#212D3A]')}>
              Are you an expat staff?
            </label>
            <div className="flex flex-col">
              <div className="left-0 flex flex-col">
                <ul className="relative">
                  {gender.map((item: any, index: any) => (
                    <label
                      key={index}
                      className={clsx('pr-1 flex items-center cursor-pointer')}
                      onClick={() => handlecheckbox3(item)}
                    >
                      <input
                        type="radio"
                        checked={selectedItems3 === item}
                        readOnly
                        className="w-4 h-4 text-[#004E89] focus:ring-0 focus:outline-none"
                      />
                      <span className="font-normal text-[14px]  text-[#3C3C3C] pl-4">{item}</span>
                    </label>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
        {selectedItems3 === 'Yes' && selectedItems === 'Yes' && (
          <div className="hubspot-form pt-4">
            <HubspotPGForm formID={formIdYes} onData={handleDataFromChild} />
          </div>
        )}
        {selectedItems3 === 'No' && selectedItems === 'Yes' && (
          <div className="hubspot-form pt-4">
            <HubspotPGForm formID={formId} onData={handleDataFromChild} />
          </div>
        )}
      </>
    )
  }
  const renderDependent = () => {
    return (
      <>
        {!dataFromHubspot && (
          <>
            <label className={clsx('text-[14px] font-normal text-[#212D3A]')}>
              Are you a dependent (spouse, parent or child) of a P&G staff or an expat staff?
            </label>
            <div className="flex flex-col">
              <div className="left-0 flex flex-col">
                <ul className="relative">
                  {gender.map((item: any, index: any) => (
                    <label
                      key={index}
                      className={clsx('pr-1 flex items-center cursor-pointer')}
                      onClick={() => handlecheckbox2(item)}
                    >
                      <input
                        type="radio"
                        checked={selectedItems2 === item}
                        readOnly
                        className="w-4 h-4 text-[#004E89] focus:ring-0 focus:outline-none"
                      />
                      <span className="font-normal text-[14px] text-[#3C3C3C] pl-4">{item}</span>
                    </label>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {selectedItems2 === 'Yes' && selectedItems === 'No' && (
          <div className="hubspot-form pt-4">
            <HubspotPGForm formID={formIdNo} onData={handleDataFromChild} />
          </div>
        )}

        {selectedItems2 === 'No' && selectedItems === 'No' && (
          <p className="hubspot-form pt-4">
            Unfortunately, you are not eligible for the P&G corporate screening package. Please
            contact us at 
            <a href={`tel:${'+65 6322 6333'}`} className="text-[#0957CB]">
              +65 6322 6333
            </a>
             if you have any questions or if would you like to book an appointment with us.
          </p>
        )}
      </>
    )
  }
  return (
    <>
      <section className="px-6 py-[64px] md:py-20 bg-[#FEFEFE]">
        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col gap-2 mb-8">
            <Title headingType="h2" theme="light" tagline={formTitle} className="" />
            {formDescription && (
              <div className="mt-[-24px]">
                <ReactPortableText content={formDescription} />
              </div>
            )}{' '}
            {notification && (
              <div className="md:mt-[8px]">
                <p className="text-[#6E6E6E] text-[16px] md:text-[16px] font-normal">
                  {notification}
                </p>
              </div>
            )}
          </div>
          {!dataFromHubspot && (
            <>
              <label className={clsx('text-[14px] font-normal text-[#212D3A]')}>
                Are you a P&G Staff?
              </label>
              <div className="flex flex-col">
                <div className="left-0 flex flex-col">
                  <ul className="relative pb-4">
                    {gender.map((item: any, index: any) => (
                      <label
                        key={index}
                        className={clsx('pr-1 flex items-center cursor-pointer')}
                        onClick={() => handlecheckbox(item)}
                      >
                        <input
                          type="radio"
                          checked={selectedItems === item}
                          readOnly
                          className="w-4 h-4 text-[#004E89] focus:ring-0 focus:outline-none"
                        />
                        <span className="font-normal text-[14px] text-[#3C3C3C] pl-4">{item}</span>
                      </label>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
          {selectedItems === 'Yes' && <>{renderExpat()}</>}

          {selectedItems === 'No' && <>{renderDependent()}</>}
        </div>
      </section>
    </>
  )
}

export default MakeAnEnquirySec
