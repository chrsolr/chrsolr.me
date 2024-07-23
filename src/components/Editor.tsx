'use client'

import Bottombar from '@/components/Bottombar'
import Sidebar from '@/components/Sidebar'
import { useCallback, useEffect, useState } from 'react'

export const Editor = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [modeState, setModeState] = useState<'normal' | 'insert'>('normal')
  const [location, setLocation] = useState<string>('/home')

  const handleKeyStroke = useCallback((e: KeyboardEvent) => {
    const keystroke = e.key

    console.log('keystroke', keystroke)

    if (keystroke === '-') {
      setShowSidebar((prev) => !prev)
    }

    if (keystroke === 'i') {
      setModeState('insert')
    }

    if (keystroke === 'Escape') {
      setModeState('normal')
    }

    if (keystroke === 'k') {
      e.preventDefault()
      // Create a new KeyboardEvent to simulate pressing the Tab key
      const tabPressEvent = new KeyboardEvent('keypress', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        which: 9,
        shiftKey: false, // adjust as necessary
        ctrlKey: false,
        altKey: false,
        metaKey: false,
      })

      // Dispatch the event on the document or the element you want to trigger the Tab press
      document.dispatchEvent(tabPressEvent)
    }
  }, [])

  const handleSidebarLinkClick = (url: string) => {
    setLocation(url)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyStroke)

    return () => {
      document.removeEventListener('keydown', handleKeyStroke)
    }
  }, [])

  return (
    <>
      <Sidebar show={showSidebar} onMenuItemClick={handleSidebarLinkClick} />
      <Bottombar modeState={modeState} location={location} />
    </>
  )
}
