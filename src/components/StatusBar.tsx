'use client'

import { useInterval } from '@/hooks/useInterval'
import { Typography } from './Typography'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function StatusBar() {
  const pathname = usePathname() === '/' ? '/home' : usePathname()
  const [modeState, setModeState] = useState<'normal' | 'insert'>('normal')
  const [currentTime, setCurrentTime] = useState<string>('--:--:-- --')
  const [isMilitaryTime, setIsMilitaryTime] = useState<boolean>(false)
  const [subPath, setSubPath] = useState<string>('main')
  const [urlPath, setUrlPath] = useState<string>('/home')

  const handleKeyStroke = useCallback((e: KeyboardEvent) => {
    const keystroke = e.key

    if (keystroke === 'i') {
      setModeState('insert')
    }

    if (keystroke === 'Escape') {
      setModeState('normal')
    }
  }, [])

  const handleOnClockClick = () => {
    const timeFormat = isMilitaryTime
      ? DateTime.TIME_24_WITH_SECONDS
      : DateTime.TIME_WITH_SECONDS

    setCurrentTime(DateTime.now().toLocaleString(timeFormat))
  }

  useInterval(() => {
    handleOnClockClick()
  }, 200)

  useEffect(() => {
    const [, path, rest] = pathname.split('/')
    setSubPath(path === 'home' ? 'main' : path)
    setUrlPath(path === 'home' ? '/home' : rest)

    document.addEventListener('keydown', handleKeyStroke)

    return () => {
      document.removeEventListener('keydown', handleKeyStroke)
    }
  }, [])

  return (
    <div className="flex min-w-full bg-background-light justify-between fixed left-0 bottom-0">
      <div className="flex">
        {modeState === 'normal' && (
          <Typography
            as="span"
            className="bg-accent-pink flex items-center justify-center text-background px-3 py-1 text-md">
            {modeState}
          </Typography>
        )}
        {modeState === 'insert' && (
          <Typography
            as="span"
            className="bg-accent-yellow flex items-center justify-center text-background px-3 py-1 text-md">
            {modeState}
          </Typography>
        )}
        <Typography
          as="span"
          className="bg-background-light-accent flex items-center justify-center text-foreground-muted px-3 py-1 text-md">
          {subPath}
        </Typography>
        <Typography
          as="span"
          className="text-foreground-muted flex items-center justify-center px-3 py-1 text-md whitespace-nowrap text-ellipsis overflow-hidden ...">
          {urlPath}
        </Typography>
      </div>
      <div
        className="flex hover:cursor-pointer"
        onClick={() => {
          handleOnClockClick()
          setIsMilitaryTime(!isMilitaryTime)
        }}>
        <Typography
          as="span"
          className="bg-accent-blue select-none flex items-center justify-center text-background px-3 py-1 text-md whitespace-nowrap">
          {currentTime}
        </Typography>
      </div>
    </div>
  )
}
