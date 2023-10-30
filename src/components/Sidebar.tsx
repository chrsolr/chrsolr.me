'use client'

import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useState, type ReactNode } from 'react'
import { getUniqueKey } from '~/utils/helpers'
import { Typography } from './Typography'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { useTheme } from 'next-themes'

library.add(faCodepen, faGithub, faInstagram, faLinkedin, faYoutube)

type ComponentProps = {
  isOpen: boolean
  onClose: () => void
}

function getOpenClassName(isOpen: boolean): string {
  return isOpen ? 'open' : ''
}

function getActiveClassName(isActive: boolean) {
  return isActive
    ? `
text-accent
before:opacity-100 
after:opacity-100
before:text-primary-dark
after:text-primary-dark
dark:text-accent
dark:before:text-primary-light
dark:after:text-primary-light
`
    : `
before:opacity-0 
after:opacity-0
hover:before:opacity-100
hover:after:opacity-100
before:text-primary-dark
after:text-primary-dark
dark:before:text-primary-light
dark:after:text-primary-light
`
}

const SideBarLink = function ({
  children,
  to,
  onClick,
  isActive,
}: {
  children: ReactNode
  to: string
  isActive?: boolean
  onClick?: () => void
}) {
  const pathname = window.location.pathname
  const baseClassName = `
text-xl lowercase
font-normal mb-2
hover:text-accent
dark:hover:text-accent
before:relative
before:translate-x-[-15px]
before:transform-gpu
before:text-secondary
before:transition-all
before:duration-300
before:ease-in-out
before:content-['[_']
after:relative
after:translate-x-[15px]
after:transform-gpu
after:text-secondary
after:transition-all
after:duration-300
after:ease-in-out
after:content-['_]']
`

  return (
    <Link
      href={to}
      className={`${baseClassName} ${getActiveClassName(
        isActive ?? pathname === to,
      )}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export const SideBar = function ({ isOpen, onClose }: ComponentProps) {
  const { theme = 'light', setTheme } = useTheme()
  const [hydrated, setHydrated] = useState(false)

  const socials = [
    {
      url: 'https://github.com/chrsolr/',
      icon: faGithub,
      name: 'Github',
    },
    {
      url: 'https://codesandbox.io/u/chrsolr',
      icon: faSquare,
      name: 'CodeSandbox',
    },
    {
      url: 'https://codepen.io/chrsolr',
      icon: faCodepen,
      name: 'Codepen',
    },
    {
      url: 'https://www.linkedin.com/in/christiansoler/',
      icon: faLinkedin,
      name: 'LinkedIn',
    },
    {
      url: 'https://www.youtube.com/@chrsolr',
      icon: faYoutube,
      name: 'YouTube',
    },
    {
      url: 'https://www.instagram.com/7w3n7y/',
      icon: faInstagram,
      name: 'Instagram',
    },
  ]

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  function close() {
    onClose()
  }

  return (
    <aside
      className={`
sidebar-wrapper
fixed -right-full bottom-0 top-0
z-30 flex w-full
flex-col items-center
bg-primary-light p-4
!text-2xl
text-primary-dark
dark:bg-primary-dark
dark:text-primary-light
md:-right-1/2
md:w-1/2
xl:-right-1/4
xl:w-1/4
${getOpenClassName(isOpen)}`}
    >
      <div className="flex h-[6.25rem] items-center justify-center">
        <FontAwesomeIcon
          className="hover:cursor-pointer"
          size="lg"
          icon={faTimes}
          onClick={onClose}
        />
      </div>

      <Typography size="2xl" className="lowercase">
        Navigation
      </Typography>

      <div className="my-4 h-1.5 min-w-[1rem] overflow-hidden rounded-full bg-accent" />

      <div className="flex min-w-full flex-1 flex-col items-center">
        <SideBarLink to="/" onClick={close}>
          Home
        </SideBarLink>

        <SideBarLink to="/blog" onClick={close}>
          Blog
        </SideBarLink>

        <SideBarLink
          to="#"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Theme: {theme}
        </SideBarLink>

        <div className="flex flex-1 items-end text-accent">
          {socials?.map((social) => (
            <Link
              key={getUniqueKey()}
              href={social.url}
              target="_blank"
              className="mr-4"
            >
              <FontAwesomeIcon size="lg" icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
