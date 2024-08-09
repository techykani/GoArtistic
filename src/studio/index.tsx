import React, { useEffect } from 'react'
import studioConfig from './sanity.config'
import {Studio} from 'sanity'

const StudioPage = () => {
 return <Studio config={studioConfig} /> 
}
export default StudioPage
