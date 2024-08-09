import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { useRef, useState } from 'react'
import { HubspotContactForm } from '../hubspot/HubspotContactForm'

const enquiry = [
  'Billing / Insurance',
  'Corporate Healthcare',
  'Courses / Student Services',
  'Doctor-specific Enquiries',
  'Employment / Careers',
  'Feedback',
  'Personal Health Screening Packages',
  'Investor Relations',
  'Medical Records',
  'Services',
  'Others',
]

const MakeAnEnquiryContactSec = ({
  formTitle,
  formDescription,
  formId,
  notification,
  entities,
}: any) => {
  const [showForm, setShowForm] = useState('')
  const [showEnquiryDropdown, setShowEnquiryDropdown] = useState(false)
  const [selectedEnquiry, setSelectedEnquiry] = useState('Select')
  const [showBrandDropdown, setShowBrandDropdown] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('Select a brand')
  const [selectedBrandList, setSelectedBrandList] = useState<any>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleBrandDropdown = (value: any) => {
    setSelectedBrandList(value)
    const matchedEnquiry = value?.enquiry?.find(
      (item1: any) => selectedEnquiry === item1.enquiryList,
    )
    if (matchedEnquiry) {
      setShowForm(matchedEnquiry.formId)
    } else {
      setShowForm('')
    }
    setSelectedBrand(value?.name)
  }

  const handleEnquiryDropdown = (value: string) => {
    if (selectedBrandList) {
      const matchedEnquiry = selectedBrandList?.enquiry?.find(
        (item1: any) => value === item1.enquiryList,
      )
      if (matchedEnquiry) {
        setShowForm(matchedEnquiry.formId)
      } else {
        setShowForm('')
      }
    }

    setSelectedEnquiry(value)
  }
  const handleShowDropDown = (type: string) => {
    if (type == 'enquiry') {
      if (showEnquiryDropdown) {
        setShowEnquiryDropdown(false)
      } else {
        setShowEnquiryDropdown(true)
        setShowBrandDropdown(false)
      }
    }
    if (type == 'brand') {
      if (showBrandDropdown) {
        setShowBrandDropdown(false)
      } else {
        setShowEnquiryDropdown(false)
        setShowBrandDropdown(true)
      }
    }
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
                <p className="text-grey-dark text-[16px] md:text-[16px] font-normal">
                  {notification}
                </p>
              </div>
            )}
          </div>

          <div className="w-full">
            <p className="text-grey-dark mb-2 text-[16px] font-semibold leading-[20px]">
              What is the nature of your enquiry?*
            </p>
            <div
              className="w-full  rounded-[8px] border-[1px] border-grey-3 py-3 pl-4 pr-3 flex gap-2 items-center bg-off-white mb-4 md:mb-0 relative"
              onClick={() => handleShowDropDown('enquiry')}
            >
              <span className="flex-1 text-grey-8 text-base leading-[24px] whitespace-nowrap">
                {selectedEnquiry}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0145 9.63451C18.362 10.0638 18.2957 10.6935 17.8665 11.0409L14.1249 14.0699C13.0242 14.9609 11.4503 14.9609 10.3497 14.0699L6.60807 11.0409C6.17881 10.6935 6.11253 10.0638 6.46003 9.63451C6.80752 9.20525 7.43721 9.13896 7.86647 9.48646L11.6081 12.5154C11.975 12.8124 12.4996 12.8124 12.8665 12.5154L16.6081 9.48646C17.0373 9.13896 17.667 9.20525 18.0145 9.63451Z"
                  fill="#3C3C3C"
                />
              </svg>
              {/* dropdown */}
              {showEnquiryDropdown && (
                <div className="absolute top-[55px] left-0 w-full z-50 rounded-[8px] bg-off-white shadow-level2 overflow-hidden">
                  <div
                    className="max-h-[300px] overflow-scroll contact__us-dropdown-scroll overflow-x-hidden flex flex-col"
                    ref={dropdownRef}
                  >
                    {enquiry.map((list: any) => (
                      <span
                        onClick={() => handleEnquiryDropdown(list)}
                        key={list}
                        className="text-grey-dark text-base leading-[24px] px-4 py-3 hover:font-semibold hover:bg-[#E5F7FC] transition duration-200"
                      >
                        {list}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Brand */}
          <div className="w-full md:pt-8">
            <p className="text-grey-dark mb-2 text-[16px] font-semibold leading-[20px]">
              Is your enquiry specific to one of our brands/entities?*
            </p>
            <div
              className="w-full  rounded-[8px] border-[1px] border-grey-3 py-3 pl-4 pr-3 flex gap-2 items-center bg-off-white mb-4 md:mb-0 relative"
              onClick={() => handleShowDropDown('brand')}
            >
              <span className="flex-1 text-grey-8 text-base leading-[24px] whitespace-nowrap">
                {selectedBrand}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0145 9.63451C18.362 10.0638 18.2957 10.6935 17.8665 11.0409L14.1249 14.0699C13.0242 14.9609 11.4503 14.9609 10.3497 14.0699L6.60807 11.0409C6.17881 10.6935 6.11253 10.0638 6.46003 9.63451C6.80752 9.20525 7.43721 9.13896 7.86647 9.48646L11.6081 12.5154C11.975 12.8124 12.4996 12.8124 12.8665 12.5154L16.6081 9.48646C17.0373 9.13896 17.667 9.20525 18.0145 9.63451Z"
                  fill="#3C3C3C"
                />
              </svg>
              {/* dropdown */}
              {showBrandDropdown && (
                <div className="absolute top-[55px] left-0 w-full z-50 rounded-[8px] bg-off-white shadow-level2 overflow-hidden">
                  <div
                    className="max-h-[300px] overflow-scroll contact__us-dropdown-scroll overflow-x-hidden flex flex-col"
                    ref={dropdownRef}
                  >
                    {entities.map((list: any, i: any) => (
                      <span
                        onClick={() => handleBrandDropdown(list)}
                        key={i}
                        className="text-grey-dark text-base leading-[24px] px-4 py-3 hover:font-semibold hover:bg-[#E5F7FC] transition duration-200"
                      >
                        {list?.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {showForm && (
            <div className="hubspot-form md:pt-8">
              <HubspotContactForm formID={showForm} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default MakeAnEnquiryContactSec
