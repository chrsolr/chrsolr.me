import React from 'react'
import {} from 'styled-components/macro';
import ThemeContextProvider from './providers/ThemeContextProvider'

function App() {
  return (
    <ThemeContextProvider theme={'light'}>
      <main >
        <p>Christian Soler</p>
      </main>
    </ThemeContextProvider>
  )
}

export default App
