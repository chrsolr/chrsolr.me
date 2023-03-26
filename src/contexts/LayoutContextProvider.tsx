import React, { type ReactNode, useState } from 'react'

export type LayoutContextProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const LayoutContext = React.createContext<LayoutContextProps>({
  isMenuOpen: false,
  toggleMenu: () => null,
})

export const LayoutProvider = function ({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <LayoutContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </LayoutContext.Provider>
  )
}
