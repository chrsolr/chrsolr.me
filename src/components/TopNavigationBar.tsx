'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { getUniqueKey } from '~/utils/helpers'
import { MaterialSymbolsIcon } from './MaterialSymbolsIcon'
import { useEffect, useState } from 'react'

type Props = {
  headerTitle: string[]
  onMenuIconClick: () => void
}

type BrandLinkProps = Pick<Props, 'headerTitle'>

function BrandLink({ headerTitle }: BrandLinkProps) {
  return (
    <Link href="/">
      <>
        {headerTitle.map((v) => (
          <span
            key={getUniqueKey()}
            className="even:font-semibold even:text-accent"
          >
            {v}
          </span>
        ))}
      </>
    </Link>
  )
}

export const TopNavigationBar = function ({
  headerTitle,
  onMenuIconClick,
}: Props) {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const { theme = 'light', setTheme } = useTheme()

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <div
      className="
      top-navbar-shadow 
      fixed left-0 top-0 z-10 
      flex h-28 min-w-full
      overflow-hidden bg-primary-light 
      !text-4xl 
      font-light
    text-primary-dark
    dark:bg-primary-dark
    dark:text-primary-light"
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <BrandLink headerTitle={headerTitle} />

        <div className="flex text-[1.25rem] lowercase">
          <Link href="/" className="mr-12">
            Home
          </Link>
          <Link href="/apps" className="mr-12">
            Apps
          </Link>
          <Link href="/blog" className="mr-12">
            Blog
          </Link>
          <Link
            href="#"
            className=""
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme}
          </Link>
        </div>

        {/*

        <MaterialSymbolsIcon
          className="!mr-2 !text-4xl"
          fill="fill"
          iconName={theme === 'dark' ? 'brightness_4' : 'brightness_high'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />

        <MaterialSymbolsIcon
          className="!text-4xl"
          iconName="menu"
          onClick={onMenuIconClick}
        />
        */}
      </div>
    </div>
  )
}
