import '~/styles/globals.css'
import { Raleway } from 'next/font/google'
import { type ReactChildren } from '~/shared/types'
import ThemeProvider from '~/providers/ThemeProvider'
import { LayoutProvider } from '~/providers/LayoutContextProvider'
import NavigationLayout from '~/components/NavigationLayout'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: '[/chrsolr/]',
  description: 'Christian (chrsolr) Soler',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${raleway.variable} bg-primary-light text-primary-dark antialiased dark:bg-primary-dark dark:text-primary-light`}
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
