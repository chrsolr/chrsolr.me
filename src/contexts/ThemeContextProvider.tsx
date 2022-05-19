import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { getTheme, GlobalStyles, Theme } from '../theme'

interface Props {
  children: ReactNode
  theme: Theme
}

export default function ThemeContextProvider({ children, theme }: Props) {
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
