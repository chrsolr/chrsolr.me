import '~/styles/globals.css'

import { Raleway } from 'next/font/google'
import { type ReactChildren } from '~/shared/types'

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
        className={`font-sans ${raleway.variable} bg-white text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400`}
      >
        {children}
      </body>
    </html>
  )
}
