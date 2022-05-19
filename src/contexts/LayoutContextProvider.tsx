import React, { ReactNode, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Theme } from '../theme'

type LayoutContextProps = {
  theme: Theme
  setTheme: (value: Theme | ((val: Theme) => Theme)) => void
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const LayoutContext = React.createContext<LayoutContextProps>({
  theme: 'dark',
  isMenuOpen: false,
  setTheme: (value: Theme | ((val: Theme) => Theme)) => {},
  toggleMenu: () => {},
})

function LayoutProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <LayoutContext.Provider
      value={{
        theme,
        isMenuOpen,
        toggleMenu,
        setTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
