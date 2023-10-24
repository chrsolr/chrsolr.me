'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { getUniqueKey } from '~/utils/helpers'
import { MaterialSymbolsIcon } from './MaterialSymbolsIcon'
import { useEffect, useState } from 'react'

type Props = {
  headerTitle: string[]
}

type BrandLinkProps = Pick<Props, 'headerTitle'>

function BrandLink({ headerTitle }: BrandLinkProps) {
  return (
    <span className="flex-1">
      <Link href="/">
        <>
          {headerTitle.map((v) => (
            <span
              key={getUniqueKey()}
              className="even:text-accent last:font-thin even:font-semibold"
            >
              {v}
            </span>
          ))}
        </>
      </Link>
    </span>
  )
}

export const TopNavigationBar = function ({ headerTitle }: Props) {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  return (
    <div
      className="top-navbar-shadow 
				bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light 
				fixed left-0 top-0
				z-10 flex 
				h-[100px] 
				min-w-full
				overflow-hidden
				!text-4xl
				font-light"
    >
      <div className="container mx-auto flex items-center">
        <BrandLink headerTitle={headerTitle} />

        <MaterialSymbolsIcon
          className="!mr-2 !text-4xl"
          fill="fill"
          iconName={theme === 'dark' ? 'brightness_4' : 'brightness_high'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />

        <MaterialSymbolsIcon
          className="!text-4xl"
          iconName="menu"
          onClick={() => console.log('Toggle Theme Here')}
        />
      </div>
    </div>
  )
}
