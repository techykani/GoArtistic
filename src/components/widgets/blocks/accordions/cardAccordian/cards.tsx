import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import { serializers } from '@/lib/blockContent'
import { PortableText } from '@/sanity'
import { useState } from 'react'

export interface CardAccordianProps {
    cards: AccordianCard[]
}

export interface AccordianCard {
    title: string
    description: string[]
    _key: string
}

const Card = ({ cards }: CardAccordianProps) => {
    const [selectedCard, setSelectedCard] = useState(cards[0]?._key)
    const handleDropdown = (id: string) => {
        if (selectedCard == id) return setSelectedCard('')
        setSelectedCard(id)
    }
    return (

        <div className="flex flex-col gap-4">
            {cards?.map((card: AccordianCard) => (
                <div
                    onClick={() => handleDropdown(card?._key)}
                    key={card?._key}
                    className="bg-off-white flex w-full h-full rounded-r-[8px] relative shadow-level3 cursor-pointer"
                >
                    <div className="border-[2px] border-primary-blue h-full absolute"></div>
                    <div className="w-full py-[24px] pr-[24px] pl-[20px] flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]">
                                {card?.title}
                            </div>
                            <div className="w-6 h-6">
                                {selectedCard == card?._key ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M15 12.5L10 7.5L5 12.5"
                                            stroke="#969696"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="#969696"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                        {selectedCard == card?._key && (
                            <div className="text-grey-dark text-[16px] leading-[24px]">
                                <ReactPortableText content={card?.description} s />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Card