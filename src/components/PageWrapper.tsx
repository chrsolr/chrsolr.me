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
    `${className} container mx-auto flex-1`,
  )

  return (
    <main className="flex h-screen w-full flex-col pt-[7rem]">
      {!disableContainer && <div className={twClasses}>{children}</div>}
      {disableContainer && <>{children}</>}
    </main>
  )
}
