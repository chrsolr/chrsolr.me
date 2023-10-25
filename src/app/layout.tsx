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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
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