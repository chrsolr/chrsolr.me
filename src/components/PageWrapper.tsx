import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  disableContainer?: boolean
}

export const PageWrapper = ({ children, disableContainer }: Props) => {
  return (
    <main className="h-screen w-full overflow-hidden pt-[7rem]">
      {!disableContainer && <div className="container mx-auto">{children}</div>}
      {disableContainer && <div>{children}</div>}
    </main>
  )
}
