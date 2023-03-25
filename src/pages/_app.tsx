import { type AppType } from "next/app"

import { api } from "~/utils/api"

import "~/styles/globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import React, { type ReactNode } from "react"
import { TopNavigationBar } from "~/components/TopNavigationBar"

function NavigationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNavigationBar />
      {children}
    </>
  )
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <NavigationLayout>
        <Component {...pageProps} />
      </NavigationLayout>
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
