import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { getUniqueKey } from '~/utils/helpers'
import { MaterialSymbolsIcon } from './MaterialSymbolsIcon'

type Props = {
  headerTitle: string[]
  onMenuIconClick: () => void
}
type BrandLinkProps = Pick<Props, 'headerTitle'>

function BrandLink({ headerTitle }: BrandLinkProps) {
  return (
    <span className="flex-1">
      <Link href="/" legacyBehavior>
        <a>
          {headerTitle.map((v) => (
            <span
              key={getUniqueKey()}
              className="last:font-thin even:font-semibold even:text-accent"
            >
              {v}
            </span>
          ))}
        </a>
      </Link>
    </span>
  )
}

export const TopNavigationBar = function ({
  headerTitle,
  onMenuIconClick,
}: Props) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="
      top-navbar-shadow 
      fixed top-0 left-0 z-10 
      flex h-[6.25rem] min-w-full
      overflow-hidden bg-primary-light 
      !text-4xl 
      font-light
    text-primary-dark
    dark:bg-primary-dark
    dark:text-primary-light"
    >
      <div className="container mx-auto flex items-center">
        <BrandLink headerTitle={headerTitle} />
        <MaterialSymbolsIcon
          className="!mr-2"
          iconName={theme === 'dark' ? 'brightness_high' : 'brightness_4'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <MaterialSymbolsIcon iconName="menu" onClick={onMenuIconClick} />
      </div>
    </div>
  )
}
