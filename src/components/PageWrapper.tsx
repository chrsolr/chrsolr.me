import { type ReactNode } from 'react'
import { mergeTailwindClasses } from '~/utils/helpers'

type Props = {
  children: ReactNode
  className?: string
  disableContainer?: boolean
}

export const PageWrapper = ({
  children,
  className = '',
  disableContainer,
}: Props) => {
  const twClasses = mergeTailwindClasses(
    `${className} flex h-screen w-full flex-col overflow-hidden pt-[7rem]`,
  )

  return (
    <main className={twClasses}>
      {!disableContainer && (
        <div className="container mx-auto flex-1">{children}</div>
      )}
      {disableContainer && <>{children}</>}
    </main>
  )
}
