import { type ReactChildren } from '~/shared/types'
import { Typography } from '~/components/Typography'
import { mergeTailwindClasses } from '~/utils/helpers'

export default function Title({
  children,
  className,
}: ReactChildren & { className?: string }) {
  return (
    <Typography
      size="4xl"
      weight="semibold"
      className={mergeTailwindClasses(`${className} text-accent`)}
    >
      {children}
    </Typography>
  )
}
