
import { ScrollspySection } from '@/lib/types/detailsPagesTypes'
import { ScrollspySections } from '@/lib/types/detailsPagesTypes'


export interface Subsection{
    _key: string
    firstColumnStyle: boolean
    title: string
    table: Table
  }

export interface MutantScrollspySection extends ScrollspySection{
    subsections?: Subsection[]
  }

export interface MutantScrollspySections extends ScrollspySections{
    sections: MutantScrollspySection[]
  }


export interface ScrollspySectionProps {
      scrollspySections: MutantScrollspySections
      getInTouch?: GetInTouch
    }
  
