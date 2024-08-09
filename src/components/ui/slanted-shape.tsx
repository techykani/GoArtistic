import clsx from 'clsx'
import { useWindowSize } from '@/lib/hooks'
import { motion } from 'framer-motion'
interface SlantedShapeProps {
  className: string
  res?: 'both' | boolean
  slant: 'up-right' | 'up-left' | 'down-left' | 'down-right'
  customValue?: number
  initial?: any
  animate?: any
  transition?: any
  children?: React.ReactNode
}
export const SlantedShape: React.FC<SlantedShapeProps> = ({
  className,
  res,
  slant,
  customValue,
  children,
  ...rest
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const value =
    customValue && typeof customValue === 'number'
      ? customValue
      : res && !(res === 'both')
      ? 6
      : res === 'both' && windowWidth > 1024
      ? 22
      : res === 'both' && windowWidth < 1024
      ? 6
      : 22

  return (
    <motion.div
      className={clsx(className, 'left-0 top-0')}
      style={{
        clipPath: `polygon(0% calc(0% + ${slant === 'up-right' ? value : 0}%), 100% calc(0% + ${
          slant === 'up-left' ? value : 0
        }%), 100% calc(100% - ${slant === 'down-left' ? value : 0}%), 0 calc(100% - ${
          slant === 'down-right' ? value : 0
        }%))`,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
