import { type ReactNode } from 'react'
import { mergeTailwindClasses } from '~/utils/helpers'

type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

type Props = {
  children: ReactNode
  onClick?: () => void
  className?: string
  size?: FontSize
  weight?: FontWeight
}

function getFontSize(size: FontSize) {
  return size === 'base'
    ? 'text-base'
    : size === 'xs'
    ? 'text-xs'
    : size === 'sm'
    ? 'text-sm'
    : size === 'lg'
    ? 'text-lg'
    : size === 'xl'
    ? 'text-xl'
    : size === '2xl'
    ? 'text-2xl'
    : size === '3xl'
    ? 'text-3xl'
    : size === '4xl'
    ? 'text-4xl'
    : size === '5xl'
    ? 'text-5xl'
    : size === '6xl'
    ? 'text-6xl'
    : size === '7xl'
    ? 'text-7xl'
    : size === '8xl'
    ? 'text-8xl'
    : size === '9xl'
    ? 'text-9xl'
    : 'text-base'
}

function getFontWeight(weight: FontWeight) {
  return weight === 'thin'
    ? 'font-thin'
    : weight === 'extralight'
    ? 'font-extralight'
    : weight === 'light'
    ? 'font-light'
    : weight === 'normal'
    ? 'font-normal'
    : weight === 'medium'
    ? 'font-medium'
    : weight === 'semibold'
    ? 'font-semibold'
    : weight === 'bold'
    ? 'font-bold'
    : weight === 'extrabold'
    ? 'font-extrabold'
    : weight === 'black'
    ? 'font-black'
    : 'font-normal'
}

export const Typography = ({
  children,
  onClick,
  className = '',
  size = 'base',
  weight = 'normal',
}: Props) => {
  const twClasses = mergeTailwindClasses(
    `mb-4 ${className} ${getFontSize(size)} ${getFontWeight(weight)}`,
  )
  return (
    <p className={twClasses} onClick={onClick}>
      {children}
    </p>
  )
}
