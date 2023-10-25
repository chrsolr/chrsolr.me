'use client'

import React, { type ReactNode, useState } from 'react'

type Props = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const LayoutContext = React.createContext<Props>({
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
