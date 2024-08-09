import { serializers } from '@/lib/blockContent'
import { PortableText } from '@/sanity'
import { useState } from 'react'
import Card from './cards'
import PrimarySection from '../../sections/primarySection'

export interface CardAccordianProps {
  title: string
  tagline: string
  description: string[]
  link: CTAButton
  target: '_self' | '_blank' | '_parent' | '_top'
  btnType: 'primary' | 'secondary' | 'tertiary'
  arrowVisibility: boolean
  theme: 'light' | 'dark'
  customStyle: string
  size: 'medium' | 'small'
  arrowColor: 'white' | 'blue' | 'black'
  cards: Card[]
}

export interface CTAButton {
  text: string
  href: string
}

export interface Card {
  title: string
  description: string[]
  _key: string
}

const CardAccordian = ({
  title,
  tagline,
  description,
  link,
  target,
  btnType,
  arrowVisibility,
  theme,
  customStyle,
  size,
  arrowColor,
  cards,
}: CardAccordianProps) => {
  return (
    <div className="px-6 md:px-[71px]">
      <div className="max-w-[808px] mx-auto flex flex-col gap-8">
        {/* primary section */}
        <PrimarySection
          title={title}
          tagline={tagline}
          logo=""
          description={description}
          link={link}
          target={target}
          btnType={btnType}
          arrowVisibility={arrowVisibility}
          theme={theme}
          customStyle={customStyle}
          size={size}
          arrowColor={arrowColor}
        />
        {/* card */}
        <Card cards={cards} />
      </div>
    </div>
  )
}

export default CardAccordian
