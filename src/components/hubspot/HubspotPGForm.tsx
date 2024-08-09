import React, { useEffect, useState } from 'react'

interface Props {
  formID: string
  onData: (data: any) => void
}

export const HubspotPGForm: React.FC<Props> = ({ formID, onData }: any) => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const sendDataToParent = () => {
    onData(true)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https:///js.hsforms.net/forms/embed/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: process.env.NEXT_PUBLIC_HUBSPOT_REGION,
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: formID,
          target: '#hubSpotForm',
          onFormSubmit: function () {
            sendDataToParent() // Call the function
          },
        })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formID])

  return <div id="hubSpotForm"></div>
}
