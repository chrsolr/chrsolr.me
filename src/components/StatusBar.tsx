'use client'

import { useInterval } from '@/hooks/useInterval'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Typography } from './Typography'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const MenuLink = ({
  to,
  tabIndex,
  label,
  target,
  onClick = () => {},
}: {
  to: string
  tabIndex: number
  label: string
  target?: '_top' | '_self' | '_blank' | '_parent'
  onClick?: () => void
}) => {
  return (
    <Link tabIndex={tabIndex} href={to} target={target} onClick={onClick}>
      <Typography
        as="span"
        className="text-md flex items-center justify-center border-b border-b-background bg-background-light-accent px-3 py-1 text-foreground-muted hover:cursor-pointer"
      >
        {label}
      </Typography>
    </Link>
  )
}

export default function StatusBar() {
  const pathname = usePathname() === '/' ? '/home' : usePathname()
  const [showNavigation, setShowNavigation] = useState<boolean>(false)
  const [modeState, setModeState] = useState<'normal' | 'insert'>('normal')
  const [currentTime, setCurrentTime] = useState<string>('--:--:-- --')
  const [isMilitaryTime, setIsMilitaryTime] = useState<boolean>(false)
  const { storeInLocalStorage, retrieveFromLocalStorage } = useLocalStorage()

  const handleKeyStroke = useCallback((e: KeyboardEvent) => {
    const keystroke = e.key

    if (keystroke === 'i') {
      setModeState('insert')
    }

    if (keystroke === 'Escape') {
      setModeState('normal')
    }

    if (keystroke === '-') {
      setShowNavigation((prev) => !prev)
    }
  }, [])

  const updateClock = () => {
    const timeFormat = isMilitaryTime
      ? DateTime.TIME_24_WITH_SECONDS
      : DateTime.TIME_WITH_SECONDS

    setCurrentTime(DateTime.now().toLocaleString(timeFormat))
  }

  const handleOnClockClick = () => {
    updateClock()
    setIsMilitaryTime(!isMilitaryTime)
    storeInLocalStorage<boolean>('isMilitaryTime', !isMilitaryTime)
  }

  useInterval(() => {
    updateClock()
  }, 200)

  useEffect(() => {
    setIsMilitaryTime(
      retrieveFromLocalStorage<boolean>('isMilitaryTime', false),
    )

    document.addEventListener('keydown', handleKeyStroke)

    return () => {
      document.removeEventListener('keydown', handleKeyStroke)
    }
  }, [])

  return (
    <div className="fixed bottom-0 left-0 flex min-w-full justify-between bg-background-light">
      <div className="flex">
        {modeState === 'normal' && (
          <Typography
            as="span"
            className="text-md flex items-center justify-center bg-accent-pink px-3 py-1 text-background"
          >
            {modeState}
          </Typography>
        )}
        {modeState === 'insert' && (
          <Typography
            as="span"
            className="text-md flex items-center justify-center bg-accent-yellow px-3 py-1 text-background"
          >
            {modeState}
          </Typography>
        )}
        <div>
          {showNavigation && (
            <div className="absolute bottom-8">
              <MenuLink
                tabIndex={0}
                to="https://github.com/chrsolr/chrsolr/tree/main/blog"
                label="blog"
              />

              <MenuLink
                tabIndex={0}
                to="https://github.com/chrsolr/advent-of-code"
                label="aoc"
              />

              <MenuLink
                tabIndex={0}
                to="/game-sens"
                label="game sens"
                onClick={() => {
                  setShowNavigation(() => false)
                }}
              />

              <MenuLink
                tabIndex={0}
                to="/assets/files/csoler-resume.pdf"
                target="_blank"
                label="resume"
                onClick={() => {
                  setShowNavigation(() => false)
                }}
              />

              <MenuLink
                tabIndex={0}
                to="/"
                label="home"
                onClick={() => {
                  setShowNavigation(() => false)
                }}
              />
            </div>
          )}
          <div
            onClick={() => {
              setShowNavigation((prev) => !prev)
            }}
          >
            <Typography
              as="span"
              className="text-md flex select-none items-center justify-center bg-background-light-accent px-3 py-1 text-foreground-muted hover:cursor-pointer"
            >
              menu
            </Typography>
          </div>
        </div>
        <Typography
          as="span"
          className="text-md flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap px-3 py-1 text-foreground-muted"
        >
          {pathname}
        </Typography>
      </div>
      <div className="flex hover:cursor-pointer" onClick={handleOnClockClick}>
        <Typography
          as="span"
          className="text-md flex select-none items-center justify-center whitespace-nowrap bg-accent-blue px-3 py-1 text-background"
        >
          {currentTime}
        </Typography>
      </div>
    </div>
  )
}
