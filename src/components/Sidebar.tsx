import { SignInButton, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState, type ReactNode } from 'react'
import { UserContext } from '~/contexts/UserContextProvider'
import { MaterialSymbolsIcon } from './MaterialSymbolsIcon'
import { Typography } from './Typography'

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
    safter:opacity-100
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
  const router = useRouter()
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
        isActive === undefined ? router.pathname === to : isActive,
      )}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export const SideBar = function ({ isOpen, onClose }: ComponentProps) {
  const [showApps, setShowApps] = useState<boolean>(false)
  const { isSignedIn } = useContext(UserContext)

  function close() {
    setShowApps(false)
    onClose()
  }

  return (
    <aside
      className={`
        sidebar-wrapper
        fixed top-0 bottom-0 -right-full
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
        <MaterialSymbolsIcon
          className="!text-4xl"
          iconName="close"
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
        <SideBarLink
          to=""
          isActive={false}
          onClick={() => setShowApps(!showApps)}
        >
          Apps
        </SideBarLink>
        {showApps && (
          <div className="w-[calc(100%+2rem)] bg-[#f9f9f9] text-center dark:bg-[#1b1f22]">
            <SideBarLink to="/apps/binary-clock" onClick={close}>
              Binary Clock
            </SideBarLink>
          </div>
        )}
        <SideBarLink to="/blog" onClick={close}>
          Blog
        </SideBarLink>
        <SideBarLink to="/resume" onClick={close}>
          Resume
        </SideBarLink>
        <SideBarLink to="#" onClick={close}>
          {!isSignedIn && <SignInButton mode="modal">sign in</SignInButton>}
          {isSignedIn && <SignOutButton>sign out</SignOutButton>}
        </SideBarLink>
      </div>
    </aside>
  )
}
