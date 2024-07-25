'use client'

import { useInterval } from '@/hooks/useInterval'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Typography } from './Typography'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function StatusBar() {
  const pathname = usePathname() === '/' ? '/home' : usePathname()
  const [showNavigation, setShowNavigation] = useState<boolean>(false)
  const [modeState, setModeState] = useState<'normal' | 'insert'>('normal')
  const [currentTime, setCurrentTime] = useState<string>('--:--:-- --')
  const [isMilitaryTime, setIsMilitaryTime] = useState<boolean>(false)
  const [subPath, setSubPath] = useState<string>('main')
  const [urlPath, setUrlPath] = useState<string>('/home')
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
    const [, path, rest] = pathname.split('/')
    setSubPath(path === 'home' ? 'main' : path)
    setUrlPath(path === 'home' ? '/home' : rest)

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
              <Link
                tabIndex={0}
                href="https://github.com/chrsolr/chrsolr/tree/main/blog"
              >
                <Typography
                  as="span"
                  className="text-md flex items-center justify-center border-b border-b-background bg-background-light-accent px-3 py-1 text-foreground-muted hover:cursor-pointer"
                >
                  blog
                </Typography>
              </Link>

              <Link
                tabIndex={0}
                href="https://github.com/chrsolr/advent-of-code"
              >
                <Typography
                  as="span"
                  className="text-md flex items-center justify-center border-b border-b-background bg-background-light-accent px-3 py-1 text-foreground-muted hover:cursor-pointer"
                >
                  aoc
                </Typography>
              </Link>

              <Link
                tabIndex={0}
                href="/assets/files/csoler-resume.pdf"
                target="_blank"
              >
                <Typography
                  as="span"
                  className="text-md flex items-center justify-center border-b border-b-background bg-background-light-accent px-3 py-1 text-foreground-muted hover:cursor-pointer"
                >
                  resume
                </Typography>
              </Link>
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
              {subPath}
            </Typography>
          </div>
        </div>
        <Typography
          as="span"
          className="text-md ... flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap px-3 py-1 text-foreground-muted"
        >
          {urlPath}
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
