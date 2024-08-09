import clsx from 'clsx'

export const Title: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <h2 className={clsx(className, 'uppercase text-head-6 tracking-[0.1em] text-neutral-900')}>
      {children}
    </h2>
  )
}
