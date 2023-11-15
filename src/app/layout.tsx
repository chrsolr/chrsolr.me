import '~/styles/globals.css'
import { Ubuntu_Mono } from 'next/font/google'
import { type ReactChildren } from '~/shared/types'
import ThemeProvider from '~/providers/ThemeProvider'
import { LayoutProvider } from '~/providers/LayoutContextProvider'
import NavigationLayout from '~/components/NavigationLayout'

const ubuntu_mono = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
  weight: '400',
})

export const metadata = {
  title: '[/chrsolr/]',
  description: 'Christian (chrsolr) Soler',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en" className="overflow-y-scroll text-[18px]">
      <body
        className={`
          antialiased 
          ${ubuntu_mono.variable}
          bg-primary-light 
          text-fg-light
          dark:bg-primary-dark
          dark:text-fg-dark`}
      >
        <ThemeProvider>
          <LayoutProvider>
            <NavigationLayout>{children}</NavigationLayout>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
