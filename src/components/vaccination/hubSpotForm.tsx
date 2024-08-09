import { useEffect, useRef } from 'react'
import Title from '../widgets/shared/title'

const HubSpotForm = () => {
  const formRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.src = '//js.hsforms.net/forms/embed/v2.js'

    script.onload = () => {
      const formScript = document.createElement('script')
      formScript.type = 'text/javascript'
      formScript.innerHTML = `
        hbspt.forms.create({
          region: "na1",
          portalId: "8455804",
          formId: "2c0b6471-f7ab-4592-9b77-41983d03108e",
          target: "#hubspotFormVac"  // Specify the ID or class of the element where the form should be rendered
        });
      `

      document.body.appendChild(formScript)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="px-6 py-[48px] md:py-[80px] bg-[#FEFEFE] ">
      <div className='max-w-[600px] mx-auto flex flex-col gap-4 pb-8'>
        <Title headingType='h2' theme='light' tagline='Book a vaccination now' />
        <p>Please fill up the fields and click on the Submit button.</p>
      </div>
      <div id="hubspotFormVac" ref={formRef} className={`max-w-[600px] mx-auto hubspot-form`}></div>
      {/* Your other content goes here */}
    </div>
  )
}

export default HubSpotForm
