export interface EyeBrowProps {
  title: string
  theme?: 'light' | 'dark'
  className?: string
}

const EyeBrow = ({ title, theme, className }: EyeBrowProps) => {
  return (
    <div className="flex">
      <p
        className={`${theme == 'dark' ? 'text-[#FEFEFE]' : 'eyebrow_gradient'
          } text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase ${className}`}
      >
        {title}
      </p>
    </div>
  )
}

export default EyeBrow
