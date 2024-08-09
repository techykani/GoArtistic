import style from '@/styles/Home.module.css';


export interface TitleProps {
    tagline: string
    headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    theme?: 'light' | 'dark'
    className?: string
}

const Title = ({ tagline, headingType, theme, className }: TitleProps) => {
    return (
        <>
            {headingType == 'h1' && (
                <h1
                    className={` text-[#FEFEFE] text-[32px] md:text-[40px] font-bold leading-[38px] md:leading-[48px] tracking-[0.32px] md:tracking-[0.8px] whitespace-pre-line font-inter ${className}`}
                >
                    {tagline}
                </h1>
            )}
            {headingType == 'h2' && (
                <h2
                    className={`${theme == "light" ? "text-[#0957CB]" : "text-[#FEFEFE]"} text-[26px]  md:text-[32px] font-bold leading-[32px] md:leading-[38px] md:tracking-[0.32px] whitespace-pre-line ${style.montserrat} ${className}`}
                >
                    {tagline}
                </h2>
            )}
            {headingType == 'h3' && (
                <h3
                    className={`${theme == 'light' ? 'text-[#3C3C3C]' : 'text-[#FEFEFE]'
                        } text-[24px] md:text-[26px] font-semibold leading-[28px] md:leading-[32px] whitespace-pre-line ${style.montserrat} ${className}`}
                >
                    {tagline}
                </h3>
            )}
            {headingType == 'h4' && (
                <h4
                    className={`${theme == 'light' ? 'text-[#3C3C3C]' : 'text-[#FEFEFE]'
                        } text-[20px] md:text-[24px] font-semibold leading-[24px] md:leading-[28px] whitespace-pre-line ${style.montserrat} ${className}`}
                >
                    {tagline}
                </h4>
            )}
            {headingType == 'h5' && (
                <h5
                    className={`${theme == 'dark' ? 'text-[#3C3C3C]' : 'text-[#FEFEFE]'
                        } text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px] whitespace-pre-line ${style.montserrat} ${className}`}
                >
                    {tagline}
                </h5>
            )}
            {headingType == 'h6' && (
                <h6
                    className={`${theme == 'dark' ? 'text-[#3C3C3C]' : 'text-[#FEFEFE]'
                        } text-[16px] md:text-[18px] font-semibold leading-[20px] md:leading-[22px] whitespace-pre-line ${style.montserrat} ${className}`}
                >
                    {tagline}
                </h6>
            )}
        </>
    )
}

export default Title
