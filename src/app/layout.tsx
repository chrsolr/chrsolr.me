import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const mainFont = JetBrains_Mono({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'chrsolr.me',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overflow-y-hidden" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          mainFont.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
