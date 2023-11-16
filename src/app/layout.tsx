import '~/styles/globals.css'
import { Raleway } from 'next/font/google'
import { type ReactChildren } from '~/shared/types'
import ThemeProvider from '~/providers/ThemeProvider'
import { LayoutProvider } from '~/providers/LayoutContextProvider'
import NavigationLayout from '~/components/NavigationLayout'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en" className="overflow-y-scroll text-[16px]">
      <body
        className={`
          font-raleway 
          antialiased 
          ${raleway.variable} 
          bg-primary-light 
          text-primary-dark 
          dark:bg-primary-dark 
          dark:text-primary-light`}
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
