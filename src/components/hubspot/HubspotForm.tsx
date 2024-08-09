import React, { useEffect, useState } from 'react'

interface Props {
  formID: string
}

export const HubspotForm: React.FC<Props> = ({ formID }) => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js?pre=1'
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
            setFormSubmitted(true)
          },
        })
      }
    })
  }, [formID])

  return <div id="hubSpotForm"></div>
}
