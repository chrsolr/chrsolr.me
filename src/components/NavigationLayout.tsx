'use client'

import { useInterval } from '@/hooks/useInterval'
import { useCallback, useEffect, useState } from 'react'
import StatusBar from './StatusBar'
import { DateTime } from 'luxon'

export default function NavigationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [modeState, setModeState] = useState<'normal' | 'insert'>('normal')
  const [time, setTime] = useState<string>(Date.now().toString())

  const handleKeyStroke = useCallback((e: KeyboardEvent) => {
    const keystroke = e.key

    if (keystroke === 'i') {
      setModeState('insert')
    }

    if (keystroke === 'Escape') {
      setModeState('normal')
    }
  }, [])

  useInterval(() => {
    setTime(DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS))
  }, 1000)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyStroke)

    return () => {
      document.removeEventListener('keydown', handleKeyStroke)
    }
  }, [])

  return (
    <>
      {children}
      <StatusBar
        modeState={modeState}
        currentTime={time}
        url={'/blog/codercamps-bootcamp-as-a-student'}
      />
    </>
  )
}
