'use client'

import { useContext, useEffect, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LayoutContext } from '~/providers/LayoutContextProvider'

export const TopNavigationBar = function () {
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
      <div className="container mx-auto flex items-center justify-end">
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
