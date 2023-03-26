import { type AppType } from 'next/app'

import { api } from '~/utils/api'

import '~/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import React, { useContext, type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { TopNavigationBar } from '~/components/TopNavigationBar'
import { SideBar } from '~/components/Sidebar'
import {
  LayoutProvider,
  LayoutContext,
  type LayoutContextProps,
} from './../contexts/LayoutContextProvider'

function NavigationLayout({ children }: { children: ReactNode }) {
  const { isMenuOpen, toggleMenu } =
    useContext<LayoutContextProps>(LayoutContext)
  return (
    <>
      <TopNavigationBar
        headerTitle={['chr', 'solr', '.me']}
        onMenuIconClick={toggleMenu}
      />
      <SideBar isOpen={isMenuOpen} onClose={toggleMenu} />
      {children}
    </>
  )
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class">
        <LayoutProvider>
          <NavigationLayout>
            <Component {...pageProps} />
          </NavigationLayout>
        </LayoutProvider>
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
