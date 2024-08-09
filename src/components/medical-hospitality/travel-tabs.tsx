import { useCallback, useState } from 'react'

import { Tab } from '../ui/tab/travelTab/tab'
import { renderObjectArray } from 'sanity-react-extra'
import { Accessibile } from '../gp-services/accessibile'
import { CommunityTabs } from './travel-tabs/communityTabs'

import Milestones from '../about-us/milestone'

import { About } from './about'

import Enquiry from '../widgets/blocks/enquiry'
import ClinicList from './travel-tabs/clinicLocations'
import Discover from './travel-tabs/discover'
import { GuidingPrinciple } from './travel-tabs/guidingPrinciple'
import OurNetwork from './travel-tabs/ourNetwork'

export const TravelTabs: React.FC<any> = ({ tabSections }) => {
  const [selectedOption, setSelectedOption] = useState(tabSections[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <>
      <Tab
        options={tabSections}
        selectedIndex={selectedIndex}
        setSelectedOption={setSelectedOption}
        setSelectedIndex={setSelectedIndex}
      />
      {renderObjectArray(selectedOption?.sectionsArray, {
        'medicalHospitalityPage.communityTabs': CommunityTabs,
        'medicalHospitalityPage.network': OurNetwork,
        'medicalHospitalityPage.discover': Discover,
        'medicalHospitalityPage.enrol': Milestones,
        'medicalHospitalityPage.contactInfo': ClinicList,
        'medicalHospitalityPage.about': About,
        'medicalHospitalityPage.guidingPrinciple': GuidingPrinciple,
        'medicalHospitalityPage.accessibile': Accessibile,
        'medicalHospitalityPage.enquiry': Enquiry,
      })}
    </>
  )
}
