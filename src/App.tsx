import React from 'react'
import ThemeContextProvider from './providers/ThemeContextProvider'
import Content from './shared/components/Content'

function App() {
  return (
    <ThemeContextProvider theme={'light'}>
      <main>
        <Content>
          <p>Christian Soler</p>
        </Content>
      </main>
    </ThemeContextProvider>
  )
}

export default App
