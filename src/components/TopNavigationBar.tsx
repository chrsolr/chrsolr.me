'use client'

import Link from 'next/link'
import { getUniqueKey } from '~/utils/helpers'
import { useContext, useEffect, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LayoutContext } from '~/providers/LayoutContextProvider'

type Props = {
  headerTitle: string[]
  onMenuIconClick: () => void
}

type BrandLinkProps = Pick<Props, 'headerTitle'>

function BrandLink({ headerTitle }: BrandLinkProps) {
  return (
    <Link href="/" className="font-raleway">
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

export const TopNavigationBar = function ({ headerTitle }: Props) {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const { toggleMenu } = useContext(LayoutContext)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <nav
      className="
        z-10 flex h-28
        select-none overflow-hidden
        bg-primary-light
        !text-4xl
        font-light
        dark:bg-primary-dark"
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex-1">
          <BrandLink headerTitle={headerTitle} />
        </div>

        <FontAwesomeIcon
          className="hover:cursor-pointer"
          size="xs"
          icon={faBars}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  )
}
