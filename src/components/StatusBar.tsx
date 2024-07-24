'use client'

import { useInterval } from '@/hooks/useInterval'
import { Typography } from './Typography'
import { DateTime } from 'luxon'
import { useCallback, useEffect, useState } from 'react'

export default function StatusBar({
  url = '',
}: {
  url: string
}) {
  const [currentTime, setCurrentTime] = useState<string>('--:--:-- --')
  const [modeState, setModeState] = useState<'normal' | 'insert'>('normal')

  const handleKeyStroke = useCallback((e: KeyboardEvent) => {
    const keystroke = e.key

    if (keystroke === 'i') {
      setModeState('insert')
    }

    if (keystroke === 'Escape') {
      setModeState('normal')
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyStroke)

    return () => {
      document.removeEventListener('keydown', handleKeyStroke)
    }
  }, [])

  useInterval(() => {
    setCurrentTime(DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS))
  }, 1000)

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
          main
        </Typography>
        <Typography
          as="span"
          className="text-foreground-muted flex items-center justify-center px-3 py-1 text-md">
          {url}
        </Typography>
      </div>
      <div className="flex">
        <Typography
          as="span"
          className="bg-accent-blue flex items-center justify-center text-background px-3 py-1 text-md">
          {currentTime}
        </Typography>
      </div>
    </div>
  )
}
