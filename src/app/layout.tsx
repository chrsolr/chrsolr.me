import '~/styles/globals.css'

import { Inter } from 'next/font/google'
import { type ReactChildren } from '~/shared/types'

const inter = Inter({
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
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  )
}
