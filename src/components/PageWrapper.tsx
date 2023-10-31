import { type ReactNode } from 'react'
import { mergeTailwindClasses } from '~/utils/helpers'

type Props = {
  children: ReactNode
  className?: string
  containerCssClasses?: string
  disableContainer?: boolean
}

export const PageWrapper = ({
  children,
  className = '',
  containerCssClasses = '',
  disableContainer,
}: Props) => {
  return (
    <main
      className={mergeTailwindClasses(`flex w-full flex-col pb-8 ${className}`)}
    >
      {!disableContainer && (
        <div
          className={mergeTailwindClasses(
            `container mx-auto flex-1 ${containerCssClasses} `,
          )}
        >
          {children}
        </div>
      )}
      {disableContainer && <>{children}</>}
    </main>
  )
}
