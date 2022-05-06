import React from 'react'
import ThemeContextProvider from './providers/ThemeContextProvider'
import TopBar from './shared/components/TopBar'

function App() {
  return (
    <ThemeContextProvider theme={'light'}>
      <main>
        <TopBar headerTitle={['chr', 'solr', '.io']} />
      </main>
    </ThemeContextProvider>
  )
}

export default App
