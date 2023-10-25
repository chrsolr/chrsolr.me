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
    <span className="flex-1">
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
    </span>
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
    <div className="top-navbar-shadow text-pr flex h-[100px] min-w-full overflow-hidden bg-primary-light !text-4xl font-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
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
          onClick={onMenuIconClick}
        />
      </div>
    </div>
  )
}
