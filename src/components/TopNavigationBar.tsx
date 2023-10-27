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
    <Link href="/" className="flex-1 font-raleway">
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
      <div
        className="
        container mx-auto flex 
        items-center justify-center"
      >
        <BrandLink headerTitle={headerTitle} />

        <FontAwesomeIcon
          className="hover:cursor-pointer"
          size="xs"
          icon={faBars}
          onClick={toggleMenu}
        />
      </div>
    </div>
  )
}
