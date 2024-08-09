import clsx from 'clsx'

interface SectionProps {
  setActive: any
  name: string
  className?: string
  blurTop?: boolean
  blurBottom?: boolean
  hidden?: boolean
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  const rootClass = clsx(className, 'w-full relative lg:container z-20')

  return <section className={rootClass}>{children}</section>
}
