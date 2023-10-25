'use client'

import { useContext } from 'react'
import { LayoutContext } from '~/providers/LayoutContextProvider'
import { type ReactChildren } from '~/shared/types'
import { TopNavigationBar } from './TopNavigationBar'
import { SideBar } from './Sidebar'

const NavigationLayout = ({ children }: ReactChildren) => {
  const { isMenuOpen, toggleMenu } = useContext(LayoutContext)

  return (
    <>
      <TopNavigationBar
        headerTitle={['[', '/', 'chr', 'solr', '.me', '/', ']']}
        onMenuIconClick={toggleMenu}
      />
      <SideBar isOpen={isMenuOpen} onClose={toggleMenu} />
      {children}
    </>
  )
}

export default NavigationLayout