'use client'

import { ThemeProvider } from 'next-themes'
import { type ReactChildren } from '~/shared/types'

const Provider = ({ children }: ReactChildren) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Provider
