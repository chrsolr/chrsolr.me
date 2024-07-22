import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function Typography({
  as = 'p',
  className = '',
  children,
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
  children: ReactNode
}) {
  if (as === 'h1') {
    return (
      <h1
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          className,
        )}
      >
        {children}
      </h1>
    )
  }

  if (as === 'h2') {
    return (
      <h2
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className,
        )}
      >
        {children}
      </h2>
    )
  }

  if (as === 'h3') {
    return (
      <h3
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          className,
        )}
      >
        {children}
      </h3>
    )
  }

  if (as === 'h4') {
    return (
      <h4
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-tight',
          className,
        )}
      >
        {children}
      </h4>
    )
  }

  if (as === 'span') {
    return <span className={cn('leading-4', className)}>{children}</span>
  }

  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  )
}
