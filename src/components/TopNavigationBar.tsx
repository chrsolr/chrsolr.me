import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '~/contexts/UserContextProvider'
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
  const [hydrated, setHydrated] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isSignedIn, isLoaded, profileImageUrl } = useContext(UserContext)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated && !isLoaded) {
    return null
  }

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

        {isSignedIn && profileImageUrl && (
          <Image
            className="!mr-2 !h-8 !w-8 rounded-full p-1 ring-1 ring-primary-dark dark:ring-primary-light"
            src={profileImageUrl}
            alt="Rounded avatar"
            width={32}
            height={32}
          />
        )}

        <MaterialSymbolsIcon
          className="!mr-2 !text-4xl"
          iconName={theme === 'dark' ? 'light_mode' : 'dark_mode'}
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
