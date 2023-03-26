import { type AppType } from 'next/app'

import { api } from '~/utils/api'

import '~/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import React, { type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { TopNavigationBar } from '~/components/TopNavigationBar'
import { SideBar } from '~/components/Sidebar'

function NavigationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNavigationBar
        headerTitle={['chr', 'solr', '.me']}
        onMenuIconClick={() => null}
      />
      <SideBar isOpen onClose={() => null} />
      {children}
    </>
  )
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider attribute="class">
        <NavigationLayout>
          <Component {...pageProps} />
        </NavigationLayout>
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
